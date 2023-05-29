import React from 'react';

function Footer(){
  return(
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-title">ПОДПИШИТЕСЬ НА <span>exkluzív</span></div>
        <div className="footer-icon">
          <svg width="45" height="45" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="50" height="50" rx="15" fill="black"/>
            <image id="image0_69_7" width="50" height="50"
                   xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADx0lEQVRoge2au08UURTGD8YHBhDXErREMBY+wE4xJppITAAbW0Ji+A9QqX20BEIpobdQoxWs7w6tVUALZYlWugYEKvlZzLnZEZmde+/cWRq+ZDKb2XO+8525Z+5rRmQHO8gFdS7GQLuI9IvIJRFpFZEjItIQSMuqiJREZElEiiLyuK6ubiEQdwSgC3hO7fEM6AyRwB5gAthQ4h/AfaAXaAdCtYYADcrZB0xqLDT2OLDbl7gAvFCyVeA2cCCUcIv4B4A7wFqsdQ66kuyhUkpLQFdOem20nAC+qJbXwF4X5wl1XARactRpq6cFKKmmMVunLq3LVeBUzhqtAZzWMvsDnLZxMCV1uwb6nADcVW3FNMP2WO9Uswc7Fv+KPpMloGeL/5uBn6qxrRrRTTWazFVxcnzzHAAsJthM6f/D8eu7Ntld1POTPIQGgtF2KdECmNdsj/pG0fFnEHgMzAG/9ZgDHul/hQTfHm2VReBygo0p/7lqIpbVqMkjgf3ACPCLdJSBW0C9R5wm5ViuZgSAB3kL8C4mdBq4rnevQY8OvTYTs3uLxziVqtMnEU1i0TQ3cNbC5xyVMnYedIMnouVkWuIlDnMhomfplfrOupRZHomMqMtHlyRi/oVYy9x08AuXiIowD3ZqOVXhOa8cZRJ6M2edjokMqvm0peZqXEXlGrC0/0/n5gHRBb16fpCBw8Bw9Fa1soVji5jabg8Qt0O5kge5f+2DltaKmjda6q3G1ahcK5b2QUsrJIyOjawEPvim59YMHAZmQPzuS5AlkQ96PpeBw6Bbz+99CbIkYqbT1zJwGBiOMMsHjwGxrC7d6R6JPBdiA6LV7CBor6X2Zooybzsqb/IvAAvKMZzuYanTI5F6oqk4RBNA62SAQ8Ab9d3eSaP6xKfxC8B5C58LwCf12f5pfMyvRe+qQREYAo4RDXaN+nuIaOvTYNY1CdtEsix164l2YcqkowzcAPZ5xLFa6obYfDgIDAAPidYpK3p81GsDeKxdYvxWmw9mOt3nGyhvAFdV4z/Lh80DotmKDDOdzgfmJs8kWrDNW6ZpwHbLVI1Nr3KnRvqsAdzbqqySjDuJXiusYbN9XyMQve5YJ3qtcNLWaVwzLwEhpumZALRS2eAedXHcHSuxJeBMjjrTtJwEvqqWIq4vRXU8MMmsEb1kac5J71bxm/WZWFcNM97jj7bMmNYl2mNMAf1EGwaZ1+uxWI3KeVVjmN7pDzDq3BIJQY4DT6k9ilh2OK6fcLRJ5ROOIyJyWERCtcpviT7hKEnlE47Pgbh3sANf/AXz7u+5M19CfgAAAABJRU5ErkJggg=="/>

          </svg>

          <svg width="45" height="45" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="50" height="50" rx="15" fill="black"/>
            <image id="image0_69_9" width="50" height="50"
                   xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADVUlEQVRoge2aSWsUQRiGn9LgKGpQo1HUQyDuKIjLySyC4nIT8eDyAxRFIv4MEVHx4lUE/4ALipeQCG6gXtyiATWCK7gimuDroaZjZdI9me6q7ongc6qZrv7qe6uqu776quE/4wsTypCkmUAnsAFYAbQCzcDUcpXvwFugH3gI9ALdxphPoXzIjKSSpH2SrkoaUnqGJF2RtFdSqR4Cpkg6Kul1BueTGJB0RNLkokRsl/QsoIBK+iRtzVNASdKpHAVUck7SlNAi5kq6W6CIiNuSmkOJaJEd7nrxVFLLWH5Wff1KmgP0AEuD9Ep2ngNtxpg3SRUShci+PXqBtTk4loU7QLsx5mfcxQlVbjyBn4gfwElgIzAPaADmACuBvcBpoC+FvfXA8VQeyL5ifeiX1FpjW2nZUquIkqQnHiIGJa1O0Wlp6VPMohk3tQ4BS2p1JIYLxpj7HvePxSJgf9Ua5dHwDTt2pPEqYxuvVBGbVY7ILmB+GkdiuJfg8AFJL2Sn3jAZ21gI7Ey8KhvF+hIbVkj6HMC2y2XXvnEamgm8ByZm7CVr0JjYtUnK3PtJDAFNxpgvMHJqdeIpomAagI7ohyukrXhfvIkVsjyrNeNQSx2n7oKsbZZZFhVcIYs9jWbBN44bXu9cIU2eRrPgK2RWVHCFTPM0moV1nvc3RoVq0W8RrAllqMEpf8MZqjS4a0SB6wjAl6jgjsiHHBrKm49RwRXyrA6O+DK8MXOFPKyDI748igqukBt1cMSXnqjgBo0zsM/JvxI0DgKzRwWN5az49cCN5cm1SASMXkfOFeyMD+fdHyOmgez28TkewVxBU2sAaDXG/Ir+GDEi5eRXutxRfTjmioCYTGN5VB6QMU1awIj0AasqM46jYq1yha5AjYZGwMGktGn8HdKZLBmBKvZCcDLJfrUkdgm74KyvWX2+3AI6Kp+NiLGOFWZjM/Lj4VhhgzHmbVKFqvsRY8wHYBvpsuaheQpsqiaiZiQ1yx6DFc1N2cOmcOjvYejvgkScVZ5n75K2yJ7r5cVjSZtzE1AhpiSpSzYrHoqXkg6rTl9AlCTtkXRJFVn2GhmUdFHSbkmTfHwJ+VFNIzZ/3I7NWi7CnhlOL1f5CrzDbqkfYdeobmPM11A+/Gc88QcH1K0RdfZ0uAAAAABJRU5ErkJggg=="/>

          </svg>

          <svg width="45" height="45" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="50" height="50" rx="15" fill="black"/>
            <image id="image0_69_8" width="50" height="50"
                   xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEGklEQVRoge2ZS4xURRSGv0LGEUUUUXRBdCLiKxriAzeCoyCOJCYSYyJo1KVRMBDduXSlqDGyQAOJiS7cuHLiI050McgGXwsXTEDAjKPREaLixDgywOeiuvHSXd19+/ZjesGXdHK7qvrU+W9VV506BWfpLUK7DKkLgUHgTuBGYCmwGLig1ORvYBI4DOwD9gCjIYQ/2+VDYdR+9TH1U/WEzXNC/UR9VO2fDQHz1OfUnws4X4uf1K3qed0SsU492EYBlXyvDnVSQL/6RgcFVPKuOq/dIi5Xv+6iiDJfqovbJWLAONyzxQF1oJGfdZdf9TLgC+C6tryV4hwCVoYQfq3VoKYQ4+qxB7itA44V4StgVQjh31TlnDo/fJ3eEQGwAni1VmVyRNR1wMed8qhFhkIII5WFVUKMO+x3wLXd8KoAB4GbQwjT2cLU1NpEPhEzwBZiLHUOcB9wqkUn83AN8FTdFsZNL2/YUWVMHe7IAlzNhPViM2MAmIfRGr8f6pzvVWzM9l05tZ6oO2T/s6NG+QhwIKeNVnk8++W0EON5Yk1OI9+kCkMIUltku1mrLih/yY7IIPFPm4eJOnXvEBeCTjOX6DNwppCVTRhZUKduUamTbrCq/JAVcn0TBu5IFap9wC7aeIRuwA3lh6yQZjbAJ2uUbwfuKeJRQZaVH7JCLmnCwHr1ykR5M6PaDhaVH7JCLmzCQB+wLVH+DDCdKO8Up33OCmk2vHhEfShbEEIYA55vwbHWUX8psLv+rl6VsNWts/2Rcp/ZEfmjgP6FwLBaOS23Aq81+O04MRI4WaDfMkerStQPW3gzH6lVm6kxdptKtD+qXl1qs1R9U/2nQL/DKSEvFlVR4m216ligLlHfU0+W2s2oqxPtrlBfUo810efLKSHrWxSiMRfVl5oD6jJ1m/pwjWmSbZeXB1IGLlKn2yDmc7WZPanSj0tz9nPcVNAYQjhG/PO1ymrgWxPTJyfJ8CfBSAjhr2SN+Q9WeTil7lKXNKNC/SCn/Q31jPSp420Uo3G67lBvbyCgX30rp80f1XMbvZFNbRaSZZ/6gnqLer4635iSfVo93ISdZyv9TqWDBoAf6qqdXfYDyyszjql00N3d8acQAptTadOUkM5dsrTO9hDCZ6mKM6aWMcyYJBPn9xB7gbtCCMdTlZUjsoLeFHEIeLCWCKgW0ovT6gCwJoQwWa9RrwvZS7zgGW/UsDJBlzc86AY7gcEQwpGGLTkz/7SW/Am6TrKfuMQmV6daZIXcn6P9UWA3MEoUvQWoOuoWZAJ4BdhZ63otF8ZUfSWT6vvqZvUmtXK5nqtuNF4nFDnhzRhPphtsFDs14LRj6m5iwms08xkrJabzvIj5wL3ArcByYsLv4tJnDjAF/Ea8cRoj3haPhhCmWhFwll7lPz56P7XLbZ9cAAAAAElFTkSuQmCC"/>

          </svg>
        </div>
        <div className="footer-href">
          <a href="#">О НАС</a>
          <a href="#">КОНТАКТЫ</a>
          <a href="#">УСЛОВИЯ ДОСТАВКИ</a>
          <a href="#">СОТРУДНИЧЕСТВО</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer;