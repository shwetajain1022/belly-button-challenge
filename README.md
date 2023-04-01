# belly-button-challenge
------------------------------------------

1. Used the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json. 
2. Created a list of OTUs by extracting the information from the JSON file using d3 library. 
3. Used this list to update the dropdown menu with the OTU ids. 
4. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual. \
a. Used sample_values as the values for the bar chart. \
b. Used otu_ids as the labels for the bar chart. \
c. Used otu_labels as the hovertext for the chart. 
5. Created a bubble chart that displays each sample. \
a. Used otu_ids for the x values. \
b. Used sample_values for the y values. \
c. Used sample_values for the marker size. \
d. Used otu_ids for the marker colors. \
e. Use otu_labels for the text values. 
![image](https://user-images.githubusercontent.com/40103518/229263226-051231c7-0582-414e-9457-22bb9502e0fc.png)

Bubble Chart
--------------------------
a. Displayed the sample metadata, i.e., an individual's demographic information. 
b. Displayed each key-value pair from the metadata JSON object somewhere on the page.

Updated of all the plots happens when a new sample is selected. 
![image](https://user-images.githubusercontent.com/40103518/229263297-fe86703a-ad82-4375-a5ea-11a904b47bbf.png)


Static page
------------------------
https://shwetajain1022.github.io/belly-button-challenge/ 
