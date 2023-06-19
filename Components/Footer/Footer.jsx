import "../Footer/footer.css";

export function Footer() {
  return (
    <div className="contentFooter">
      <div className="contentFooterDescriptions">
        <div className="contentAllMessage">
          <h2 className="titleMessage">LOCATION</h2>
          <p className="contentMessage">
            3481 Melrose Place Beverly Hills, CA 90210
          </p>
        </div>
        <div className="contentAllMessage">
          <h2 className="titleMessage">AROUND THE WEB</h2>
          <div></div>
        </div>
        <div className="contentAllMessage">
          <h1 className="titleMessage">ABOUT FREELANCER</h1>
          <p className="contentMessage">
            Freelance is a free to use , open source Bootstrap theme created by
            <span className="specialMessage"> Start Bootstrap</span>
          </p>
        </div>
      </div>
      <p  className="copyRigthMessage">Copyright© Your Website 2017</p>
    </div>
  );
}
