document
  .getElementById("btn-donate-aid")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Getting number of amount donated by user
    const donation = getInputNumberById("input-aid");

    // Checking if donation is a number
    if (isNaN(donation)) {
      alert("Failed to donate");
      document.getElementById("input-aid").value = "";
      return;
    } else {
      // Getting the present balance by number
      const mainBalance = getBalanceNumberById("main-balance");
      const aidBalance = getBalanceNumberById("aid-balance");

      // Checking the balance of user
      if (mainBalance < donation) {
        alert("Insufficiant Balance!");
        document.getElementById("input-aid").value = "";
        return;
      } else {
        // Donation confirmation massage
        donationConfirmMsg(donation);

        // Equations
        const newBalanceaid = aidBalance + donation;
        const newMainBalance = mainBalance - donation;
        document.getElementById("aid-balance").innerText = newBalanceaid;
        document.getElementById("main-balance").innerText = newMainBalance;
        document.getElementById("input-aid").value = "";

        // Adding History
        const title = document.getElementById("aid-title").innerText;
        addToHistory(donation, title);
      }
    }
  });
