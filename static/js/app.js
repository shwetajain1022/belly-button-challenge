//URL for analysis
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
let sample_id_list = [];
let sample_values_list = [];
let otu_ids_list = [];
let otu_labels_list = [];
let samples = [];

let d3select = d3.select("#selDataset");

function init(){
    d3.json(url).then(function(data) {
        samples= data.samples;
        sample_id_list = samples.map(x=>x.id)
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

function drawBubbleChart(sampleid){
    d3.json(url).then(function(data) {
        let sample = samples.filter(sample => sample.id == sampleid);
        let otu_id = sample[0].otu_ids;
        let otu_ids = otu_id.slice(0,10);
        let sample_values = sample[0].sample_values.slice(0,10);
        let otu_labels = sample[0].otu_labels.slice(0,10);
        var otu_ids_list_str = otu_id.map(function (x) { 
            return "OUT "+x; 
        });

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
        
        var dataBubble = [trace1];
        
        var layout = {
            title: 'OUT ids',
            showlegend: false,
            // height: 600,
            // width: 600
        };
        
        Plotly.newPlot('bubble', dataBubble, layout);
    });
      
}

function drawBarChart(sampleid){
    d3.json(url).then(function(data) {
        let sample = samples.filter(sample => sample.id == sampleid);
        let otu_id = sample[0].otu_ids;
        let otu_ids = otu_id.slice(0,10);
        let sample_values = sample[0].sample_values.slice(0,10);
        let otu_labels = sample[0].otu_labels.slice(0,10);
        var otu_ids_list_str = otu_id.map(function (x) { 
            return "OUT "+x; 
        });

        let trace1 = {
            x: sample_values.reverse(),
            y: otu_ids_list_str.reverse(),
            text: otu_labels.reverse(),
            type: "bar",
            orientation: 'h'
        };

        let layout = {
            title: "A Plotly pglot"
        };
        
        Plotly.newPlot("plot", [trace1], layout);
    });
}

init();

   

