import "../styles/SidebarOption.css"

function SidebarOption({ active, Icon, text }) {
    return (
        <div className={`sidebar-option ${active && "sidebar-option-active"}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption