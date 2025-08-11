
let count = 0;

      function showCount() {
        document.getElementById("count").innerText = count;
      }

       function increment () {
         ++count;
           showCount();
    }

      function decrement() {
       --count;
          showCount();
      }

    function add() {
        let value = Number(document.getElementById("input").value);
        if (value) {
          count = count + value;
           showCount();
        }
      }

      function subtract() {
        let value = Number(document.getElementById("input").value);
        if (value) {
          count = count - value;
          showCount();
        }
      }