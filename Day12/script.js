function toggleDropdown(event, menuId) {
    event.preventDefault(); // Prevent the default link behavior
    let dropdown = document.getElementById(menuId);
    
    // Close other dropdowns
    document.querySelectorAll('.dropdown-content').forEach(menu => {
        if (menu.id !== menuId) {
            menu.style.display = 'none';
        }
    });

    // Toggle the selected dropdown
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
}
