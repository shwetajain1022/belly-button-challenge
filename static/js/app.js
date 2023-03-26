//URL for analysis
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
let sample_id_list = [];
let sample_values_list = [];
let otu_ids_list = [];
let otu_labels_list = [];
let samples = [];

let d3select = d3.select("#selDataset");

samples = d3.json(url).then(function(data) {
    console.log("Data : " );
    console.log(data);
    samples= data.samples;


    console.log(samples);
    sample_id_list = samples.map(x=>x.id)

    var options = d3select.selectAll("option")
                .data(sample_id_list)
                .enter()
                .append("option");
    options.text(function(d) {
                    return d;
                    })
                    .attr("value", function(d) {
                    return d;
                    });
    // On change to the DOM, call getData()
    //d3.selectAll("#selDataset").on("change", getData);

    // Function called by DOM changes
    // function getData() {
    //   let dropdownMenu = d3.select("#selDataset");
    //   // Assign the value of the dropdown menu option to a letiable
    //   let dataset = dropdownMenu.property("value");
    //   // Initialize an empty array for the country's data
    //   let data = [];

    //   if (dataset == 'australia') {
    //       data = australia;
    //   }
    //   else if (dataset == 'brazil') {
    //       data = brazil;
    //   }
    //   else if (dataset == 'uk') {
    //       data = uk;
    //   }
    //   else if (dataset == 'mexico') {
    //     data = mexico;
    //   }
    //   else if (dataset == 'singapore') {
    //       data = singapore;
    //   }
    //   else if (dataset == 'southAfrica') {
    //     data = southAfrica;
    //   }
    // // Call function to update the chart
    //   updatePlotly(data);
    // }

    // // Update the restyled plot's values
    // function updatePlotly(newdata) {
    //   Plotly.restyle("pie", "values", [newdata]);
    // }
            
    d3select.on("change",function() {
                let sample = samples.filter(x=>x==this.value);
                let otu_ids = sample.otu_ids.slice(0,10);
                //otu_ids_list.push(otu_ids);
                let sample_values = sample.sample_values.slice(0,10);
                //sample_values_list.push(sample_values);
                let otu_labels = sample.otu_labels.slice(0,10);
                //otu_labels_list.push(otu_labels);
        //         console.log(this.value); 
                console.log(sample);
        // })
    });
        //console.log(this.value);
        //console.log(sample);
                // let otu_ids = sample.otu_ids.slice(0,10);
                // otu_ids_list.push(otu_ids);
                // let sample_values = sample.sample_values.slice(0,10);
                // sample_values_list.push(sample_values);
                // let otu_labels = sample.otu_labels.slice(0,10);
                // otu_labels_list.push(otu_labels);
      //  console.log(otu_ids);
    // }) 
            //Get top 10 OTUs
            // for(let i=0; i<samples.length;i++)
            // {
            //     let sample = samples[i];
            //     sample_id_list.push(sample.id);
                // let otu_ids  = sample.otu_ids.slice(0,10);
                // otu_ids_list.push(otu_ids);
                // let sample_values = sample.sample_values.slice(0,10);
                // sample_values_list.push(sample_values);
                // let otu_labels = sample.otu_labels.slice(0,10);
                // otu_labels_list.push(otu_labels);
            //}

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

