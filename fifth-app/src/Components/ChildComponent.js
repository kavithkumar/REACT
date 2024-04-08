import GrandChild from "./GrandChild1";

function Child() {
    return (
        <>
            <div style={{ border: 'solid 1px green', padding: '10px' }}>
                <b>Child Component</b><br></br>
                <GrandChild>
                    <b>This is grandchild component</b><br></br>
                    <p>Paragraph
                    </p><br></br>
                </GrandChild>
            </div>
        </>
    );
}
export default Child