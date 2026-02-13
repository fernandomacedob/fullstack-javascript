const measure = prompt("Type a measure in meters (m):");

const unity = prompt(
    "Which unity do you want to convert to? (cm, m, km, in, ft, yd, mi):"+
    "\n1. milimeters (mm)"+
    "\n2. centimeters (cm)"+
    "\n3. decimeters (dm)"+
    "\n4. decameters (dam)"+
    "\n5. hectometers (hm)"+
    "\n6. kilometers (km)"
    );

switch (unity) {
    case "1":
        alert("Result: " + measure +"m = "+ measure * 1000 + "mm");
        break;
    
    case "2":
        alert("Result: " + measure +"m = "+ measure * 100 + "cm");
        break;
    
    case "3":
        alert("Result: " + measure +"m = "+ measure * 10 + "dm");
        break;
    
    case "4":
        alert("Result: " + measure +"m = "+ measure / 10 + "dam");
        break;
    
    case "5":
        alert("Result: " + measure +"m = "+ measure / 100 + "hm");
        break;
    
    case "6":
        alert("Result: " + measure +"m = "+ measure / 1000 + "km");
        break;
    
    default:
        alert("Invalid unity!");
        break;
}