import React from 'react';
import DashboardMenu from "./DashboardMenu";

export default function Dashboard() {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div class="card" style={{ width: '25rem' }}>
              <div class="card-body">
                <h5 class="card-title"><i class="fa-solid fa-user"></i>Accounts</h5>
                <hr />
                <a href="/" class="card-link">Card link</a>
                <a href="/" class="card-link">Another link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
