const Software = ({career1, career2,career3,career4,career5}) => {
    return(
        <div>
            <ul>
                <li>
                    {career1}: This career focuses on the design,
                    development, and maintenance of software. Software engineers work on developing 
                    applications, operating systems, database software, and other software products.
                 </li>
                 <br />
                <li>
                    {career2}:Data scientists use programming skills and knowledge in mathematics and statistics to gather, 
                    analyze, and extract valuable insights from datasets. Their work contributes to data-driven decision making and 
                    the development of predictive models.
                </li>
                <br />
                <li>
                    {career3}:  With the constant growth of mobile devices, mobile app developers are in high demand. 
                    These professionals specialize in creating applications for platforms like iOS and Android, using 
                    specific programming languages and frameworks.
                </li>
                <br />
                <li>
                    {career4}:With the rise of cyber threats, cybersecurity has become a crucial field. Cybersecurity experts
                    are responsible for protecting organizations' systems and data, identifying vulnerabilities, and implementing
                    security measures to prevent attacks.
                </li>
                <br />
                <li>
                    {career5}: Software architects design the structure and organization of software systems. They work on defining components,
                    modules, and their interaction, ensuring that systems are efficient, scalable, and meet functional and non-functional requirements.
                </li>
            </ul>
        </div>
    )
}

export default Software;