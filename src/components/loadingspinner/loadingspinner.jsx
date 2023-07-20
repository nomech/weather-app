import './loadingspinner.css'
function Loadingspinner() {
  return (
    <>
    <div className="lds-default">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p>Loading data...</p>
    </>
  );
}


export default Loadingspinner