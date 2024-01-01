function Header(){
    return(
        <header class="nav">
        <table style="width:100%;background-color:#EADBC8;">
            <tr>
                <td style="width:30%;">
                    <a href="" ><img id="navlogo" src="propertyhnavlogo.png" alt="PropertyHub logo"/></a>
                </td>
                <td style="width:50%;"></td>
                <td style="width:20%;">
                    <a href="" id="loginbutton"><img id="loginimg" src="login_icon.png" alt="Login icon"/></a>
                </td>
            </tr>
        </table>
        <div style="position:sticky;top:0;">
            <a href="" class="navbutton">Home</a>
            <a href="" class="navbutton">My Account</a>
            <a href="" class="navbutton">Properties</a>
            <a href="" class="navbutton">About Us</a>
        </div>
    </header>
    );
}
export default Header;
