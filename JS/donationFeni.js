document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Getting number of amount donated by user
    const donation = getInputNumberById("input-feni");

    // Checking if donation is a number
    if (isNaN(donation)) {
      // alert("Failed to donate");
      document.getElementById("input-feni").value = "";
      return;
    } else {
      // Getting the present balance by number
      const mainBalance = getBalanceNumberById("main-balance");
      const feniBalance = getBalanceNumberById("feni-balance");

      // Checking the balance of user
      if (mainBalance < donation) {
        alert("Insufficiant Balance!");
        document.getElementById("input-feni").value = "";
        return;
      } else {
        // Donation confirmation massage
        donationConfirmMsg(donation);

        // Equations
        const newBalanceFeni = feniBalance + donation;
        const newMainBalance = mainBalance - donation;
        document.getElementById("feni-balance").innerText = newBalanceFeni;
        document.getElementById("main-balance").innerText = newMainBalance;
        document.getElementById("input-feni").value = "";

        // Getting date and time
        const dateTime = new Date().toLocaleString();

        // Adding History
        const title = document.getElementById("feni-title").innerText;
        addToHistory(donation, title, dateTime);
      }
    }
  });
