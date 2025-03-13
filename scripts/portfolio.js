// Function to open the selected tab
function openTab(event, tabName) {
    // Hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove the active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab content and add active class to the clicked tab
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}