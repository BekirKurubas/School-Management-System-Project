function loadClassesPage() {
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

    <div class="header">
        <h3 id="classes-title">Classes</h3>
    </div>

    <div class="card-container mt-4 d-flex justify-content-center">
        <div class="Card me-4">
            <div class="card" style="width: 18rem; margin-top: 5px; position: relative;">
                <div class="card-body">                  
                    <span class="d-flex justify-content-between align-items-center">
                        <h5 class="card-title">Fullstack Class</h5>                      
                        <div class="position-absolute top-0 end-0">
                            <i class="bi bi-pencil-square text-primary me-2" style="font-size: 1.5rem; cursor: pointer;" onclick="editCard()"></i>
                            <i class="bi bi-trash text-danger" style="font-size: 1.5rem; cursor: pointer;" onclick="deleteCard()"></i>
                        </div>
                    </span>
                    <h6 class="card-subtitle mb-2 text-muted">Hannes Bühler</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Students</a>
                    <a href="#" class="card-link">Teachers</a>
                </div>
            </div>
        </div>

        <div class="Card me-4">
            <div class="card" style="width: 18rem; margin-top: 5px; position: relative;">
                <div class="card-body">                    
                    <span class="d-flex justify-content-between align-items-center">
                        <h5 class="card-title">Cloud Class</h5>                        
                        <div class="position-absolute top-0 end-0">
                            <i class="bi bi-pencil-square text-primary me-2" style="font-size: 1.5rem; cursor: pointer;" onclick="editCard()"></i>
                            <i class="bi bi-trash text-danger" style="font-size: 1.5rem; cursor: pointer;" onclick="deleteCard()"></i>
                        </div>
                    </span>
                    <h6 class="card-subtitle mb-2 text-muted">Ali Sayar</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Students</a>
                    <a href="#" class="card-link">Teachers</a>
                </div>
            </div>
        </div>
    </div> 
    

        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div class="card" style="width: 100%;" id="under-card">
            <div class="card-body">
                <h3><strong>HiCoders 23/24 LMS</strong></h3>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    
        <footer class="fixed-bottom">
            <ul class="footer-tabs text-white">
                <li class="footer-tab"><a href="#" class="text-white"><strong>About Us</strong></a></li>
                <li class="footer-tab"><a href="#" class="text-white"><strong>Contact</strong></a></li>
            </ul>
        </footer>   
    `;
}

export { loadClassesPage };
