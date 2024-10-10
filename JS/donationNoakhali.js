document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Getting number of amount donated by user
    const donation = getInputNumberById("input-noakhali");

    // Checking if donation is a number
    if (isNaN(donation)) {
      // alert("Failed to donate");
      document.getElementById("input-noakhali").value = "";
      return;
    } else {
      // Getting the present balance by number
      const mainBalance = getBalanceNumberById("main-balance");
      const noakhaliBalance = getBalanceNumberById("noakhali-balance");

      // Checking the balance of user
      if (mainBalance < donation) {
        alert("Insufficiant Balance!");
        document.getElementById("input-noakhali").value = "";
        return;
      } else {
        // Donation confirmation massage
        donationConfirmMsg(donation);

        // Equations
        const newBalancenoakhali = noakhaliBalance + donation;
        const newMainBalance = mainBalance - donation;
        document.getElementById("noakhali-balance").innerText =
          newBalancenoakhali;
        document.getElementById("main-balance").innerText = newMainBalance;
        document.getElementById("input-noakhali").value = "";
        
        // Getting date and time
        const dateTime = new Date().toLocaleString();

        // Adding History
        const title = document.getElementById("noakhali-title").innerText;
        addToHistory(donation, title, dateTime);

      }
    }
  });
