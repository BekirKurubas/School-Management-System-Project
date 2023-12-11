function loadTeachersPage() {
    const contentContainer = document.querySelector('.main-container');
    contentContainer.innerHTML = `        
    <nav class="navbar navbar-expand-lg navbar-dark bg-custom-color text-white">
    <div class="container-fluid ">
        <a class="navbar-brand" href="#">LMS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active text-white">
                    <a class="nav-link text-white" href="#"><strong>Home</strong></a>
                </li>
                <li class="nav-item text-white">
                    <a class="nav-link text-white" href="#"><strong>Classes</strong></a>
                </li>
                <li class="nav-item text-white">
                    <a class="nav-link text-white" href="#"><strong>Teachers</strong></a>
                </li>
                <li class="nav-item text-white">
                    <a class="nav-link text-white" href="#"><strong>Students</strong></a>
                </li>
            </ul>
        </div>
        <a href="#">
            <img class="icon_image" src="/images/usericon.jpg" alt="">
        </a>
    </div>
</nav>
   
<div>
    <div class="container custom-margin">
        <h3>Welcome Merijam</h3>
    </div>

    <div class="container cards mt-4">
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card square-card">
                    <div class="card-body text-center">
                        <h5 class="card-title">22</h5>
                        <p class="card-text">Number of Students</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card square-card">
                    <div class="card-body text-center">
                        <h5 class="card-title">3</h5>
                        <p class="card-text">Number of Teachers</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card square-card">
                    <div class="card-body text-center">
                        <h5 class="card-title">5</h5>
                        <p class="card-text">Number of Classes</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
</div>   
        <br><br><br><br><br><br><br><br><br>
    <div class="card " style="width: 100%;" id="under-card" >
        <div class="card-body">
            <h3><strong>HiCoders 23/24 LMS</strong></h3>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
  
    <footer class="fixed-bottom ">
        <ul class="footer-tabs text-white">
            <li class="footer-tab"><a href="#" class="text-white"><strong>About Us</strong></a></li>
            <li class="footer-tab"><a href="#" class="text-white"><strong>Contact</strong></a></li>
        </ul>
    </footer>
    
    `;
}

export { loadTeachersPage };
