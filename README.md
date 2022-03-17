# slideMaster
<b>slideMaster</b> is a jQuery based library can be used to make <b>touch supported slidable</b> element. 
<h5> Key functionality </h5>
<ul>
 <li> Trigger functions with left or right slide.
 <li> Dynamically change background color opacity with slide distance. </li>
 <li> Accept minimum range of slide to trigger function execution </li>
</ul>
<a href="https://iamabhishekjaiswal.github.io/demo-for-slideMaster/"> Simple Demo </a>
<img src="https://user-images.githubusercontent.com/67130803/158685777-2fcb1659-96e8-45ae-9648-731fea41a01b.jpg"/>
<img src="https://user-images.githubusercontent.com/67130803/158684805-a531aceb-7fad-4662-a969-e6fc11d2e475.jpg"/>
<img src="https://user-images.githubusercontent.com/67130803/158684841-78397b19-33de-4f14-ae90-55011bc25ecb.jpg"/>

## Usage
<ol>
<li> Add jQuery and slideMaster to your html page.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/iAmAbhishekJaiswal/slideMaster@main/slideMaster.js"> </script>
```
</li>


<li> Create object of necessary data related to slide.

```javascript

var slideData={
           rightSlideFunction : function1,
           leftSlideFunction : function2,
           rightSlideColor :"#5cb85c",
           leftSlideColor  : "#f0ad4e",
           range: 0.6                     
           };
```
</li>

Here, <b> rightSlideFunction </b> and <b>leftSlidefunction</b> define function to call with right and left slide respectively. 

<b> rightSlideColor</b> and <b>leftSlideColor </b> define background color with right and left slide respectively. It accept <b>only hex color code</b>.

<b>range </b> define the minimum distance to trigger function. It accept value between 0 to 1 . (exp:- 0.7 represent 70% of element width). <b> range </b> is optional and can be omitted. In this case, it used default value <b>0.6</b>.


<li>
   Now call slideMaster with above object as parameter as following :-
 
 ```javascript

$('.className').slideMaster(slideData);
    
```
Here replace <b>className</b> with element's className which you want to make slidable.

</li>
</ol>


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

