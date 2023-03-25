//URL for analysis
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
let sample_id_list = [];
let sample_values_list = [];
let otu_ids_list = [];
let otu_labels_list = [];

let d3select = d3.select("#selDataset");

d3.json(url).then(function(data) {
    console.log("Data : " );
    console.log(data);
    samples = data.samples;

    sample_id_list = samples.map(x=>x.id)
    console.log(sample_id_list);

    // var options = d3select.data(sample_id_list).enter()
	//     .append('option')
	// 	.text(function (d) { return d; });
    var options = d3select.selectAll("option")
        .data(data)
        .enter()
        .append("option");
        options.text(function(d) {
            return d;
             })
               .attr("value", function(d) {
            return d;
            });
    //Get top 10 OTUs
    for(let i=0; i<samples.length;i++)
    {
        let sample = samples[i];
        sample_id_list.push(sample.id);

        // let otu_ids  = sample.otu_ids.slice(0,10);
        // otu_ids_list.push(otu_ids);
        // let sample_values = sample.sample_values.slice(0,10);
        // sample_values_list.push(sample_values);
        // let otu_labels = sample.otu_labels.slice(0,10);
        // otu_labels_list.push(otu_labels);
    }

    // var otu_ids_list_str = otu_ids_list[0].map(function (x) { 
    //     return "OUT "+x; 
    //   });
 
    // let trace1 = {
    //     x: sample_values_list[0].reverse(),
    //     y: otu_ids_list_str.reverse(),
    //     text: otu_labels_list[0].reverse(),
    //     type: "bar",
    //     orientation: 'h'
    // };

    // let layout = {
    //     title: "A Plotly plot"
    // };
    
    // Plotly.newPlot("plot", [trace1], layout);


});