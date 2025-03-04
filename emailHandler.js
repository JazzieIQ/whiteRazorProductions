document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle");
  const emailInput = document.getElementById("emailer");
  const subText = document.getElementById("sub");
  const thanksText = document.getElementById("thanks");

  toggleButton.addEventListener("click", async function () {
    const email = emailInput.value.trim();
    if (!email) return;

    try {
      const fileHandle = await getFileHandle();
      const emails = await readEmails(fileHandle);
      if (!emails.includes(email)) {
        emails.push(email);
        await writeEmails(fileHandle, emails);
        subText.style.display = "none";
        thanksText.style.display = "block";
      }
    } catch (error) {
      console.error("Error handling email:", error);
    }
  });

  async function getFileHandle() {
    const options = {
      type: "openFile",
      accepts: [{
        description: "Text Files",
        extensions: ["txt"],
        mimeTypes: ["text/plain"]
      }]
    };

    let fileHandle;
    try {
      [fileHandle] = await window.showOpenFilePicker(options);
    } catch (error) {
      fileHandle = await window.showSaveFilePicker(options);
    }
    return fileHandle;
  }

  async function readEmails(fileHandle) {
    try {
      const file = await fileHandle.getFile();
      const contents = await file.text();
      return contents.split("\n").filter(email => email.trim());
    } catch (error) {
      return [];
    }
  }

  async function writeEmails(fileHandle, emails) {
    const writable = await fileHandle.createWritable();
    await writable.write(emails.join("\n"));
    await writable.close();
  }
});