const Container = (props) => {
    const { styles, children } = props

    return (
        // container
        <div className={`container ${styles}`}>
            {children}
        </div>
    )
}
export default Container