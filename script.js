function registerStudent() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let mobile = document.getElementById("mobile").value;
    let standard = document.getElementById("standard").value;
    let division = document.getElementById("division").value;

    if (!name || !address || !mobile || !standard || !division) {
        document.getElementById("msg").innerHTML = "❌ Please fill all fields.";
        return;
    }

    document.getElementById("msg").innerHTML =
        "✅ Registration Successful! Welcome " + name;
}
