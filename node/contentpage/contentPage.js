const getRow = (str, idx) => {
  let tagArrayVal = [];
  let objVal = null;
  let dataObj = {
    tag: null,
    idx: idx,
    content: [],
  };

  while (true) {
    dataObj = getTag(str, dataObj.idx);
    if (dataObj.tag === "tr") {
      objVal = { tag: dataObj.tag, content: null };
      dataObj = getContent(str, dataObj.idx, ",");
      objVal.content = dataObj.content;
      dataObj = getClosingTag(str, dataObj.idx);
      tagArrayVal.push({ ...objVal });
    } else if (
      dataObj.tag === "/thead" ||
      dataObj.tag === "/tbody" ||
      dataObj.tag === "/tfoot"
    ) {
      dataObj.idx -= 8;
      dataObj.content = tagArrayVal;
      return dataObj;
    }
  }
};

const gettable = (str, idx) => {
  let tagArrayVal = [];
  let objVal = null;
  let dataObj = {
    tag: null,
    idx: idx,
    content: [],
  };

  while (true) {
    dataObj = getTag(str, dataObj.idx);
    switch (dataObj.tag) {
      case "thead":
      case "tbody":
      case "tfoot":
        objVal = { tag: dataObj.tag, content: null };
        dataObj = getRow(str, dataObj.idx);
        objVal.content = dataObj.content;
        dataObj = getClosingTag(str, dataObj.idx);
        tagArrayVal.push({ ...objVal });
        break;
      case "/tbl":
        dataObj.idx -= 6;
        break;
      default:
        break;
    }
    if (dataObj.tag === "/tbl") {
      dataObj.content = tagArrayVal;
      return dataObj;
    }
  }
};

const getTag = (str, idx) => {
  let tag = "";
  while ((str[idx] === " " || str[idx] === "\n") && idx < str.length) idx++;
  if (str[idx] !== "<") return null;
  idx++;
  while (str[idx] === " " && idx < str.length) idx++;
  while (str[idx] !== ">" && idx < str.length) {
    tag += str[idx];
    idx++;
  }
  if (str[idx] !== ">") return null;
  idx++;

  let dataObj = {
    tag: tag,
    idx: idx,
    content: [],
  };
  return dataObj;
};

const getExampleList = (str, idx) => {
  let tagArrayVal = [];
  let objVal = null;
  let dataObj = {
    tag: null,
    idx: idx,
    content: [],
  };

  while (true) {
    dataObj = getTag(str, dataObj.idx);
    switch (dataObj.tag) {
      case "ex":
        objVal = { tag: dataObj.tag, content: null };
        dataObj = parseExampleContents(str, dataObj.idx);
        objVal.content = dataObj.content;
        dataObj = getClosingTag(str, dataObj.idx);
        tagArrayVal.push({ ...objVal });
        break;
      case "/exl":
        dataObj.idx -= 6;
        break;
      default:
        break;
    }
    if (dataObj.tag === "/exl") {
      dataObj.content = tagArrayVal;
      return dataObj;
    }
  }
};

const getClosingTag = (str, idx) => {
  let tag = "";
  while ((str[idx] === " " || str[idx] === "\n") && idx < str.length) idx++;

  if (str[idx] !== "<") return null;
  idx++;
  if (str[idx] !== "/") return null;
  while (str[idx] !== ">" && idx < str.length) {
    tag += str[idx];
    idx++;
  }
  if (str[idx] !== ">") return null;
  idx++;

  let dataObj = {
    tag: tag,
    idx: idx,
    content: [],
  };
  return dataObj;
};

const getContent = (str, idx, delimiter = "\n") => {
  let dataObj = {
    tag: null,
    idx: -1,
    content: [],
  };
  let objVal = null;

  let bold = 0;
  let underline = 0;
  let italic = 0;
  let tagArray = [];

  let newLine = true;

  let tag = "";
  while (true) {
    if (newLine)
      while ((str[idx] === " " || str[idx] === "\n") && idx < str.length) idx++;
    else while (str[idx] === " " && idx < str.length) idx++;

    while (
      str[idx] !== "<" &&
      str[idx] !== "\n" &&
      str[idx] !== delimiter &&
      idx < str.length
    ) {
      newLine = false;
      if (str[idx] === "\\")
        // escape sequence
        idx++;
      tag += str[idx];
      idx++;
    }
    if (str[idx] === "<" && str[idx + 1] === "/") {
      if (
        (str[idx + 2] === "b" ||
          str[idx + 2] === "e" ||
          str[idx + 2] === "u") &&
        str[idx + 3] === ">"
      ) {
        if (tag !== "") {
          let content = {
            bold: bold,
            italic: italic,
            underline: underline,
            content: tag,
          };
          objVal = { tag: "c", content: content };
          tagArray.push(objVal);
        }
        switch (str[idx + 2]) {
          case "b":
            bold = 0;
            break;
          case "e":
            italic = 0;
            break;
          case "u":
            underline = 0;
            break;
          default:
            break;
        }
        idx += 4;
        tag = "";
      } else {
        if (tag !== "") {
          let content = {
            bold: bold,
            italic: italic,
            underline: underline,
            content: tag,
          };

          objVal = { tag: "c", content: content };
          tagArray.push(objVal);
          tag = "";
          newLine = true;
          dataObj.content.push(tagArray);
          dataObj.idx = idx;
        }
        break; // The last content before the closing tag
      }
    } else if (
      str[idx] === "<" &&
      (str[idx + 1] === "b" || str[idx + 1] === "e" || str[idx + 1] === "u")
    ) {
      newLine = false;
      if (tag !== "") {
        let content = {
          bold: bold,
          italic: italic,
          underline: underline,
          content: tag,
        };

        objVal = { tag: "c", content: content };
        tagArray.push(objVal);
      }
      switch (str[idx + 1]) {
        case "b":
          bold = 1;
          break;
        case "e":
          italic = 1;
          break;
        case "u":
          underline = 1;
          break;
        default:
          break;
      }
      idx += 3;
      tag = "";
    } else if (str[idx] === "\n" || str[idx] === delimiter) {
      if (str[idx] === delimiter) idx++;
      if (tag !== "") {
        let content = {
          bold: bold,
          italic: italic,
          underline: underline,
          content: tag,
        };
        objVal = { tag: "c", content: content };
        tagArray.push(objVal);
      }
      dataObj.content.push(tagArray);
      newLine = true;
      tagArray = [];
      tag = "";
    }
  }
  dataObj.idx = idx;
  return dataObj;
};

const parseContents = (stringVal) => {
  let tagArrayVal = [];

  let objVal = null;
  let dataObj = {
    tag: null,
    idx: 0,
    content: [],
  };

  while (dataObj.idx < stringVal.length) {
    dataObj = getTag(stringVal, dataObj.idx);
    if (dataObj === null) break;

    switch (dataObj.tag) {
      case "h1":
      case "h2":
      case "h3":
      case "p":
      case "ul":
      case "ol":
      case "code":
      case "img":
        objVal = { tag: dataObj.tag, content: null };
        dataObj = getContent(stringVal, dataObj.idx);
        objVal.content = dataObj.content;
        dataObj = getClosingTag(stringVal, dataObj.idx);
        tagArrayVal.push({ ...objVal });
        break;
      case "exl":
        objVal = { tag: dataObj.tag, content: null };
        dataObj = getExampleList(stringVal, dataObj.idx);
        objVal.content = dataObj.content;
        dataObj = getClosingTag(stringVal, dataObj.idx);
        tagArrayVal.push({ ...objVal });
        break;
      case "tbl":
        objVal = { tag: dataObj.tag, content: null };
        dataObj = gettable(stringVal, dataObj.idx);
        objVal.content = dataObj.content;
        dataObj = getClosingTag(stringVal, dataObj.idx);
        tagArrayVal.push({ ...objVal });
        break;
      default:
        break;
    }
  }
  return tagArrayVal;
};

const parseExampleContents = (stringVal, idx) => {
  let tagArrayVal = [];

  let objVal = null;
  let dataObj = {
    tag: null,
    idx: idx,
    content: [],
  };

  while (dataObj.idx < stringVal.length) {
    dataObj = getTag(stringVal, dataObj.idx);
    if (dataObj === null) break;
    if (dataObj.tag === "/ex") {
      dataObj.idx -= 5;
      break;
    }
    switch (dataObj.tag) {
      case "h1":
      case "h2":
      case "h3":
      case "p":
      case "ul":
      case "ol":
      case "code":
      case "img":
        objVal = { tag: dataObj.tag, content: null };
        dataObj = getContent(stringVal, dataObj.idx);
        objVal.content = dataObj.content;
        dataObj = getClosingTag(stringVal, dataObj.idx);
        tagArrayVal.push({ ...objVal });
        break;
      case "tbl":
        objVal = { tag: dataObj.tag, content: null };
        dataObj = gettable(stringVal, dataObj.idx);
        objVal.content = dataObj.content;
        dataObj = getClosingTag(stringVal, dataObj.idx);
        tagArrayVal.push({ ...objVal });
        break;
      default:
        break;
    }
  }

  dataObj.content = tagArrayVal;
  return dataObj;
};

const displayContents = (tagArray) => {
  for (let valArr of tagArray) {
    for (let val of valArr) {
      console.log(
        "Bold: ",
        val.content.bold,
        "Italic: ",
        val.content.italic,
        "Underline: ",
        val.content.underline,
        "Content: ",
        val.content.content
      );
    }
  }
};

const displayExampleContents = (exVal) => {
  for (let ex of exVal) {
    console.log("**Tag **", ex.tag);
    switch (ex.tag) {
      case "p":
      case "code":
      case "res":
        displayContents(ex.content);
        break;
      default:
        break;
    }
    console.log("**End **", ex.tag);
  }
};

const displayExampleListContents = (exArray) => {
  for (let ex of exArray) {
    displayExampleContents(ex.content);
  }
};

const displayTableContents = (tblArray) => {
  for (let tblTag of tblArray) {
    console.log("**Tag**", tblTag.tag);
    switch (tblTag.tag) {
      case "thead":
      case "tbody":
      case "tfoot":
        for (let row of tblTag.content) {
          console.log("tr");
          displayContents(row.content);
        }
        break;
      default:
        break;
    }
    console.log("**End **");
  }
};

let parseString = `
    <h1>
      Test Header One
    </h1>
    <h2>
      Header 2
    </h2>
    <img>imagefile.jpg</img>
    <p> This is a collection
        Of Strings in three
        paragraphs </p>
    <ul>
       Item 1
       Item 2
       Item 3
    </ul>
    <ol>
        Ordered Item 1
        Ordered Item 2
        Ordered Item 3
    </ol>
    <code>
        line1 <b> Bold Para </b>
        line 2 <e> Italic Para </e> Line 2 continue
        line 3 <u> Underline Para </u> line 3 continue
    </code>
    <exl>
      <ex>
        <p>This is the paragraph for Example #1</p>
        <code>
          This is code line 1
          This is code Line 2
        </code>
        <p>
          This is result 1
          This is result 2
        </p>
      </ex>
      <ex>
        <p>This is the paragraph for Example #1</p>
        <code>This is code line</code>
        <p>This is result </p>
      </ex>
      <ex>
        <code>This is code line</code>
        <p>This is result </p>
      </ex>
    </exl>
    <tbl>
      <thead>
        <tr>
        Head1,
        Head2,
        Head3
        </tr>
        <tr>
        head1,
        head2,
        head3,
        </tr>
      </thead>
      <tbody>
        <tr>
        Body 1, Body 2, Body 3
        </tr>
        <tr>
        Body 11, Body 12, Body 13
        </tr>
      </tbody>
      <tfoot>
        <tr>
        foot1
        </tr>
      </tfoot>
    </tbl>
    `;

let displayPageContents = (tagVal) => {
  for (let val of tagVal) {
    console.log("**Tag **", val.tag);
    switch (val.tag) {
      case "h1":
      case "h2":
      case "h3":
      case "p":
      case "ul":
      case "ol":
      case "code":
      case "img":
        displayContents(val.content);
        break;
      case "exl":
        displayExampleListContents(val.content);
        break;

      case "tbl":
        displayTableContents(val.content);
        break;
      default:
        break;
    }

    console.log("**End Tag**");
  }
};

let tagArrayVal = parseContents(parseString);
displayPageContents(tagArrayVal);
