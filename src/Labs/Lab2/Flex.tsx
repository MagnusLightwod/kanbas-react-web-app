
export default function Flex() {
    return(
        <div id="wd-css-flex">
  <h2>Flex</h2>
  <div className="wd-flex-row-container">
    {/* Makes the columns a specific width */}
    <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
    <div className="wd-bg-color-blue">Column 2</div>
    <div className="wd-bg-color-red wd-flex-grow-1"> 
        {/* with grow this expands far as possible  */}
                                    Column 3</div>
  </div>
</div>
    );
}