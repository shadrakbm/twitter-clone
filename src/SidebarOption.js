import "./styles/SidebarOption.css"

function SidebarOption({ Icon, text }) {
    return (
        <div className="sidebar-option">
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption