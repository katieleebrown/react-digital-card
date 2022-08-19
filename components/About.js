export default function About() {
    return (
        <div className="card-body">
            <div className="card-top text-center text-light bg-secondary">
                <h1 className="card-title">Katie Brown</h1>
                <p className="card-subtitle">Fullstack Developer</p>
                <a className="card-link" href="https://katieleebrown.netlify.app" target="_blank" >katieleebrown.netlify.app</a>
                <div className="d-flex justify-content-center p-1">
                    <a href="#" class="btn btn-light active m-1 p-1" role="button" aria-pressed="true"><i class="fa-solid fa-envelope"></i> Email</a>
                    <a href="#" class="btn btn-primary active m-1 p-1" role="button" aria-pressed="true"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
                </div>
            </div>
        </div>
    )
}