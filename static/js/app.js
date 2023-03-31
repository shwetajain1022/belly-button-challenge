//URL for analysis
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
let sample_id_list = [];
//declare samples array 
let samples = [];

//get the dropdown element 
let d3select = d3.select("#selDataset");

//Function to initialize the first landing web page
function init(){
    //get the json data
    d3.json(url).then(function(data) {
        //get the samples
        samples= data.samples;
        //get the list of the sample ids
        sample_id_list = samples.map(x=>x.id)
        //update to dropdown menu with sample ids list
        var options = d3select.selectAll("option")
                    .data(sample_id_list)
                    .enter()
                    .append("option");
        options.text(function(datavalue) {
                        return datavalue;
                        })
                        .attr("value", function(datavalue) {
                        return datavalue;
                        });
        //change the bar chart and bubble chart
        optionChanged(sample_id_list[0]);
    });
    
}

function optionChanged(sampleid){
    drawBarChart(sampleid);
    drawBubbleChart(sampleid);
    UpdateDemographicsDetails(sampleid);
}

function UpdateDemographicsDetails(sampleid){
    d3.json(url).then(function(data) {
        let metadata_List = data.metadata;
        let metadata = metadata_List.filter(sample => sample.id == sampleid);
        let displayDemoHTML = d3.select("#sample-metadata");
        displayDemoHTML.html("");
        //reference : https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript
        for (const [key, value] of Object.entries(metadata[0])) {
            displayDemoHTML.append('p').text(`${key.toUpperCase()}: ${value}`);
          }

    });
}

//function to create bubble chart
function drawBubbleChart(sampleid){
    //get the top 10 OTU ids for a given sample
    d3.json(url).then(function(data) {
        //Filter sample
        let sample = samples.filter(sample => sample.id == sampleid);
        let otu_id = sample[0].otu_ids;
        //get top 10 otu ids
        let otu_ids = otu_id.slice(0,10);
        //get top 10 sample values
        let sample_values = sample[0].sample_values.slice(0,10);
        //get top 10 otu labels
        let otu_labels = sample[0].otu_labels.slice(0,10);
        var otu_ids_list_str = otu_id.map(function (x) { 
            return "OUT "+x; 
        });
        //CREATE trace variable
        var trace1 = {
            x:  otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                color: otu_ids,
                size: sample_values
            }
        };
        
        //create array of trace variable
        var dataBubble = [trace1];
        
        //Create layout variable
        var layout = {
            title: 'OTU ids per sample',
            showlegend: false,
            // height: 600,
            // width: 600
        };
        
        //Create the Plot
        Plotly.newPlot('bubble', dataBubble, layout);
    });
      
}

//Function to draw horizontal bar chart
function drawBarChart(sampleid){
    //get the top 10 OTU IDs for the given sample ids
    d3.json(url).then(function(data) {
        //Filter sample
        let sample = samples.filter(sample => sample.id == sampleid);
        let otu_id = sample[0].otu_ids;
        //get top 10 otu ids
        let otu_ids = otu_id.slice(0,10);
        //get top 10 sample values
        let sample_values = sample[0].sample_values.slice(0,10);
        //get top 10 otu labels
        let otu_labels = sample[0].otu_labels.slice(0,10);
        var otu_ids_list_str = otu_id.map(function (x) { 
            return "OUT "+x; 
        });
        //Create the Trace variable
        let trace1 = {
            x: sample_values.reverse(),
            y: otu_ids_list_str.reverse(),
            text: otu_labels.reverse(),
            type: "bar",
            orientation: 'h'
        };
        //Set the layout
        let layout = {
            title: "Bacteria Cultures per Sample"
        };
        //Plot the Graph
        Plotly.newPlot("plot", [trace1], layout);
    });
}

//Calling Init function to display charts for the first OTUs
init();

   

