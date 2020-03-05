const React = require('react')

const Html = props => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="style.css"></link>
        <title>PokeBattles</title>
      </head>
      <body>
        {/* <!-- ~~~~~~~~~~~~~~~~~~~~~~~~ NavBar ~~~~~~~~~~~~~~~~~~~~~~~~ --> */}

  <nav class="navbar navbar-light bg-primary flexContainer">
          <form class="form-inline">
            <div class="input-group">
              <div class="input-group-prepend"></div>
              <input type="text"  class="form-control" placeholder="Username" aria-label="Username"
                aria-describedby="basic-addon1" />
      </div>
            <div>
              <button class="btn btn-outline-success btn-warning warningbtn" type="button">Sign In</button>
              <button class="btn btn-outline-success btn-warning warningbtn" type="button">Create Account</button>
              <button class="btn btn-outline-success btn-warning warningbtn" type="button">Sign Out</button>
            </div> 
          </form>
        </nav>

        {props.children}

        <script src="https://code.jquery.com/jquery-1.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous">
        </script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
        </script>
        <script src="./app.js"></script>
      </body>
    </html>
      )
    }

module.exports = Html
