const projectList = $('#projects');

projects.forEach(function(project) {
    const id = project.id;
    const projectHeader = project.header;
    const urlThumbnail = project.urlThumbnail;
    const projectDescription = project.projectDescription;
    const viewLive = project.viewLive;
    const viewGithub = project.viewGithub;

    const li = 
        `<li id="${id}"" class="project">
            <div class="projectHeader">
                <h3>${projectHeader}</h3>
            </div>
            <div class="projectThumbnail">
                <img src=${urlThumbnail} alt="project thumbnail"/>
            </div>
            <div class="projectDescription">
                <p>${projectDescription}</p>
            </div>
            <div class="projectButtons">
                <div class="viewLive">
                    <a target="_blank" href=${viewLive}>View Live</a>
                </div>
                <div class="viewGithub">
                    <a target="_blank" href=${viewGithub}>View Github</a>
                </div>
            </div>
        </li>`

    projectList.append(li)
})

// TYPEWRITER

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 500;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 125 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  