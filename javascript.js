// Get the elements
const ratesPanel = document.getElementById('rates-panel');
const ratesInfoPanel = document.getElementById('rates-info-panel');
const closePanel = document.getElementById('close-panel');

// Event listener to open the panel when clicked
ratesPanel.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default link behavior

  // First, remove the 'hidden' class to allow the panel to be visible
  ratesInfoPanel.classList.remove('hidden');

  // Remove the fade-out class if it exists (in case it's still there from closing)
  ratesInfoPanel.classList.remove('fade-out');

  // Add a slight delay before applying fade-in class for the transition
  setTimeout(() => {
    ratesInfoPanel.classList.add('fade-in');
  }, 10); // 10ms delay to make sure 'hidden' is removed first
});

// Event listener to close the panel when the close button is clicked
closePanel.addEventListener('click', function () {
  ratesInfoPanel.classList.add('fade-out'); // Trigger fade-out

  setTimeout(() => {
    ratesInfoPanel.classList.remove('fade-in'); // Remove fade-in class
    ratesInfoPanel.classList.add('hidden'); // Actually hide the panel
  }, 300); // Match the duration of your fade-out transition
});

// Event listener to close the panel when clicking outside of it
document.addEventListener('click', function (e) {
  if (!ratesInfoPanel.contains(e.target) && e.target !== ratesPanel) {
    ratesInfoPanel.classList.add('fade-out'); // Trigger fade-out

    setTimeout(() => {
      ratesInfoPanel.classList.remove('fade-in');
      ratesInfoPanel.classList.add('hidden');
    }, 300); // Match the duration of your fade-out transition
  }
});


<p id="rates-panel" href="#">Click to View Location Rates</p>
    
    <div id="rates-info-panel" class="hidden">
        <div class="panel-header">
        <button id="close-panel">×</button>
        </div> 
        <h2 id="close-margin-fix">Online Rates:</h2>
        <ul>
            <li>$26 All Day Weekend Rate</li>
            <li>$18 All Day Evening Rate</li>
            <li>$18 All Day Weekend & Public Holiday Rate</li>
        </ul>
        <br>
        <h2>Drive-up Rates:</h2>                                    
        <!-- Flexbox container for tables -->
        <div class="rate-tables">
            <!-- Weekday Rates on the left -->
            <div class="rate-column">
                <h2>Weekday Rates (Monday to Friday)</h2>
                <table>
                    <tr>
                        <td>0 - 1 hrs</td>
                        <td>$16</td>
                    </tr>
                    <tr>
                        <td>1 - 2 hrs</td>
                        <td>$32</td>
                    </tr>
                    <tr>
                        <td>2 - 3 hrs</td>
                        <td>$48</td>
                    </tr>
                    <tr>
                        <td>3 - 4 hrs</td>
                        <td>$63</td>
                    </tr>
                    <tr>
                        <td>4 - 5 hrs</td>
                        <td>$79</td>
                    </tr>
                    <tr>
                        <td>5+ hrs</td>
                        <td>$95</td>
                    </tr>
                </table>
            </div>
    
            <!-- Evening Rates on the right -->
            <div class="rate-column">
                <h2>Evening Rates (Monday to Friday)</h2>
                <table>
                    <tr>
                        <td>0 - 30 mins</td>
                        <td>$7</td>
                    </tr>
                    <tr>
                        <td>30 - 60 mins</td>
                        <td>$12</td>
                    </tr>
                    <tr>
                        <td>1 - 2 hrs</td>
                        <td>$17</td>
                    </tr>
                    <tr>
                        <td>2+ hrs</td>
                        <td>$22</td>
                    </tr>
                </table>
            </div>
        </div>
        <br>
        <div id="weekend-rates">
        <h2>Overnight Rate (Monday to Friday)</h2>
        <table>
            <tr>
                <td>$20</td>
            </tr>
        </table>
        
        <h2>Weekend Rates (Saturday, Sunday & Public Holidays)</h2>
        <table>
            <tr>
                <td>0 - 1 hrs</td>
                <td>$12</td>
            </tr>
            <tr>
                <td>1 - 2 hrs</td>
                <td>$17</td>
            </tr>
            <tr>
                <td>2+ hrs</td>
                <td>$22</td>
            </tr>   
        </table> 
    </div>
    </div>  <!--End Div for Hidden Panel -->


    CSS:

    #rates-panel {
    text-decoration: underline;
    cursor: pointer;
    
}

#rates-panel:hover {
    transform: scale(1.03); 
}

.hidden {
    display: none;
  }

#rates-info-panel {
    position: fixed;
    top: 20%;
    left: 25%;
    width: 50%;
    max-height: 80%;
    background-color: #f9f9f9;
    padding: 20px;
    border: 1px solid #ccc;
    color: black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    z-index: 99999;
    opacity: 0;
    transition: opacity 0.3s ease;
}

#rates-info-panel.fade-in {
    opacity: 1;
}

#rates-info-panel.fade-out {
    opacity: 0;
}

.rate-tables {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.rate-column {
    flex: 1;
}

#rates-info-panel table {
    width: 100%;
    margin-top: 10px; 
    border-collapse: collapse;
}

#rates-info-panel td {
    padding: 8px;
    border-bottom: 1px solid #ccc;
}

#weekend-rates {
    width: 50%;
}

#close-panel {
    background-color: #f1f1f1;
    border: none;
    color: #212320;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    font-size: 30px;
    z-index: 10;
}

#close-panel:hover {
    transform: scale(1.05); 
}

.panel-header{
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    z-index: 5;
}

#close-margin-fix {
    margin-top: -5%;
}


table {
    border-spacing: 20px;
    margin-top: -20px;
}
