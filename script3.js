switch(confirm("Do you wish to share your personal information with the site?")) {
    case true:
        console.log("Name: " + nickname + "\nHeight: " + (height-height%12)/12 + "'" + height%12 + "\"" + "\nWeight: " + weight*2.20462 + " lbs");
        break;
    case false:
        console.log("User does not wish to share his/her information.");
}