function processErrorInfo(info) {
  let col;
  let line;
  let filename;
  let message;
  let stack;
  let type = "error";

  if (info instanceof ErrorEvent) {
    col = info.colno;
    line = info.lineno;
    filename = info.filename;
    message = info.message;
    stack = info.error.stack;
    type = info.type;
  } else if (info instanceof Error) {
    message = info.message;
    stack = info.stack;
  }

  return {
    col,
    line,
    filename,
    message,
    stack,
    type,
    timestamp: datetime()
  };
}

function datetime() {
  const d = new Date();
  const time = d.toString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  const day = d.toJSON().slice(0, 10);
  return `${day} ${time}`;
}

export { processErrorInfo };
