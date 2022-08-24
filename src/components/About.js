export default function About() {
    return (
        <div className="card-body p-0">
            <div className="card-top text-center text-light bg-secondary">
                <h1 className="card-title">Katie Brown</h1>
                <p className="card-subtitle jobTitle">Fullstack Developer</p>
                <a className="card-link email" href="https://katieleebrown.netlify.app" target="_blank" >katieleebrown.netlify.app</a>
                <div className="d-flex justify-content-center">
                    <a href="#" class="btn btn-light active m-2 py-1 px-4 header-btn" role="button" aria-pressed="true"><i class="fa-solid fa-envelope"></i> Email</a>
                    <a href="#" class="btn btn-primary active m-2 py-1 px-4 header-btn" role="button" aria-pressed="true"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
                </div>
            </div>
        </div>
    )
}