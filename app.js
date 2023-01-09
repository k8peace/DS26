console.log("Hello Back to School!");
//1. Create a variable to store the vizContainer
//2. Create a variable to store the dashboard options
//3. Create a variable to store the URL - if doesn't load, might need to specify height and width
let viz;
const url =
  "https://public.tableau.com/views/EmbeddingExample_16701904934890/EmbeddingDashboard?:language=en-GB&:display_count=n&:origin=viz_share_link";
const options = {
  device: "desktop",
  height: "900px",
  width: "1400px",
};
const containerDiv = document.getElementById("vizContainer");
function initViz() {
  viz = new tableau.Viz(containerDiv, url, options);
}
document.addEventListener("DOMContentLoaded", initViz);
const exportpdfbutton = document.getElementById("exportPDF");
exportpdfbutton.addEventListener("click", exportPDFfunction);
function exportPDFfunction() {
  viz.showExportPDFDialog();
}
const exportpptbutton = document.getElementById("exportPPT");
exportpptbutton.addEventListener("click", exportPPTfunction);
function exportPPTfunction() {
  viz.showExportPowerPointDialog();
}
function getRangeValues() {
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);
  const workbook = viz.getWorkbook();
  const activeSheet = workbook.getActiveSheet();
  const sheets = activeSheet.getWorksheets();
  console.log(sheets);
  const sheetToFilter = sheets[0];
  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("viz filtered!"));
}
document
  .getElementById("FilterButton")
  .addEventListener("click", getRangeValues);
