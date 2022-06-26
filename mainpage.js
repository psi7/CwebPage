//const subButton= document.querySelector('mainform');
//subButton.addEventListener("click",SubmitFunction());
    document.addEventListener('DOMContentLoaded', () => {

        document.querySelector('form').onsubmit = () => {

            // Create new item for list
            const li = document.createElement('li');
            li.innerHTML = document.getElementById("name").value;

            // Add new item to task list
            document.querySelector('#mainform').append(li);

            // Clear input field
            document.getElementById("name") = '';

            // Stop form from submitting
            //return false;
        };

    });
    function SubmitFunction() {
        var x = document.getElementById("mainform");
        var txt = "";
        var i;
        var name, band_name;
        for (i = 0; i < x.length; i++) {
          //txt = txt + x.elements[i].value + "<br>";
          name=x.elements[0].value;
          band_name=x.elements[1].value;
        }
        console.alert(name);
        console.alert(band_name);
      }
