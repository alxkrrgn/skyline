import React, { useMemo } from 'react';

// All items
const allItems = [
    { title: "Investment Philosophy", description: "Our investment philosophy is built on a foundation of disciplined decision-making, strategic thinking, and a commitment to sustainable growth. We prioritize long-term value creation by focusing on quality assets, robust market analysis, and clear investment objectives." },
    { title: "Market Analysis", description: "Through continuous market analysis, we monitor global economic trends, industry shifts, and market dynamics to identify emerging opportunities and potential risks. This proactive approach allows us to stay ahead of market changes and adjust our strategies accordingly for optimal results." },
    { title: "Asset Allocation", description: "Effective asset allocation is key to optimizing risk-adjusted returns. By carefully selecting and balancing asset classes based on market conditions, economic forecasts, and investor goals, we ensure that each portfolio is tailored to meet specific financial objectives." },
    { title: "Alternative Investments", description: "Alternative investments, such as private equity, real estate, and hedge funds, offer unique opportunities for diversification and higher returns. We integrate these alternatives into our portfolios to provide access to non-traditional asset classes and enhance overall performance potential." },
    { title: "Global Perspective", description: "Our investment approach incorporates a global perspective, considering opportunities across regions and markets worldwide. This broad view enables us to tap into growth potential from emerging markets while managing global economic risks effectively." },
    { title: "Impact Investing", description: "We are committed to impact investing, which combines financial returns with positive social and environmental outcomes. By supporting companies and initiatives that drive change, we aim to create value not only for our investors but also for society at large." },
    { title: "Behavioral Finance", description: "Understanding the psychological factors that influence investment decisions is key to our strategy. By integrating insights from behavioral finance, we anticipate market trends and investor behavior, allowing us to make more informed and rational investment choices." },
    { title: "Innovation and Technology", description: "We embrace cutting-edge technology and innovation to enhance investment strategies. By leveraging data analytics, machine learning, and AI-driven tools, we optimize our investment processes and stay ahead in a rapidly evolving market environment." },
    { title: "Economic Forecasting", description: "Our economic forecasting capabilities allow us to anticipate future market conditions based on macroeconomic indicators, geopolitical trends, and market cycles. This insight drives our investment decisions, ensuring that we are well-positioned to navigate changing economic landscapes." },
    { title: "Capital Preservation", description: "We prioritize capital preservation by identifying low-risk opportunities that maintain or grow value in both stable and turbulent markets. This focus helps safeguard investor assets while still pursuing attractive growth prospects." },
    { title: "Liquidity Management", description: "Maintaining liquidity is essential to our investment strategy, enabling us to respond quickly to market changes and seize new opportunities. We balance liquidity needs with long-term growth potential to ensure flexibility without compromising performance." },
    { title: "Active Management", description: "Our active management approach is designed to take advantage of market inefficiencies. By continuously analyzing investment opportunities and adjusting strategies, we seek to outperform passive strategies and provide superior returns to our clients." },
    { title: "Private Equity", description: "Private equity investments allow us to tap into high-growth potential and unique value opportunities. Our experience in managing private equity portfolios enables us to generate significant returns through long-term capital investments in private companies." },
    { title: "Structured Products", description: "We specialize in creating structured products that cater to specific investor needs, offering customized risk-return profiles. These tailored solutions provide targeted exposure to various asset classes while controlling risk and enhancing potential returns." },
    { title: "Environmental, Social, and Governance (ESG)", description: "We integrate ESG factors into our investment process to promote sustainability, ethical practices, and positive societal impact. Our commitment to responsible investing aligns financial goals with the values of our clients and the broader community." },
    { title: "Alpha Generation", description: "Our goal is to consistently generate alpha, or excess returns, by identifying market inefficiencies and exploiting them through sophisticated strategies. This approach enables us to outperform traditional benchmarks and deliver enhanced value to our investors." },
    { title: "Financial Engineering", description: "Financial engineering involves the application of quantitative techniques to design innovative investment products and strategies. By leveraging advanced mathematical models and financial instruments, we create tailored solutions that maximize returns and minimize risks." },
    { title: "Tax Efficiency", description: "Our tax-efficient investment strategies focus on maximizing after-tax returns by minimizing tax liabilities through careful planning and asset allocation. This approach ensures that investors retain more of their returns, enhancing long-term wealth creation." },
    { title: "Global Asset Class Strategy", description: "We take a global view of asset allocation, strategically investing across multiple asset classes, including equities, bonds, commodities, and currencies. This diverse approach allows us to access opportunities and balance risk on a global scale." },
    { title: "Debt Instruments", description: "We integrate debt instruments into our portfolios to provide stable income streams and diversify risk. By carefully selecting fixed-income securities, we offer our clients an opportunity to reduce volatility while achieving reliable returns." },
    { title: "Volatility Management", description: "Managing volatility is crucial to maintaining stable performance during market fluctuations. We use sophisticated strategies to mitigate the impact of market volatility, ensuring that portfolios remain resilient and continue to deliver positive results." },
    { title: "Behavioral Biases", description: "We account for common behavioral biases that influence investor decisions, such as overconfidence and loss aversion. By recognizing and mitigating these biases, we make more rational investment choices and improve long-term outcomes for our clients." },
    { title: "Asset Management", description: "Our asset management approach focuses on optimizing the performance of client portfolios through active management and strategic asset allocation. By continually monitoring market conditions, we adjust our approach to maximize returns while controlling risk." },
    { title: "Hedge Fund Strategies", description: "We utilize hedge fund strategies to generate returns that are uncorrelated with traditional markets. By employing advanced tactics such as short selling, leverage, and derivatives, we provide diversified opportunities for clients seeking higher risk-adjusted returns." },
    { title: "Macro-Economic Insights", description: "Our macro-economic insights allow us to assess broader economic trends and their impact on financial markets. This understanding helps us predict market movements and adjust investment strategies to capitalize on emerging economic conditions." },
    { title: "Analytics and AI", description: "We leverage mathematical and statistical methods, quantitative analysis, and artificial intelligence in both the design and execution of our investment programs. This data-driven approach allows us to rigorously assess and manage risk while identifying the highest and best uses of capital." },
    { title: "Diversification Strategies", description: "Diversification is a cornerstone of our investment philosophy. By spreading investments across a variety of asset classes, sectors, and geographies, we mitigate risks and improve the potential for consistent performance, even in volatile markets." },
    { title: "Quantitative Research", description: "Our investment strategies are grounded in deep quantitative research, which involves the systematic study of financial data to uncover patterns, trends, and opportunities. By combining rigorous data analysis with cutting-edge computational techniques, we strive to create robust, evidence-based strategies for long-term success." },
    { title: "Risk Management", description: "By employing advanced risk management techniques, innovative portfolio strategies, and sophisticated hedge strategies, we aim to deliver superior returns compared to conventional mutual funds and portfolio management methods." },
    { title: "Technical Analysis", description: "Technical analysis and portfolio construction are integral to strategic investing. Technical analysis involves evaluating securities by analyzing statistical trends gathered from trading activities, such as price movement and volume." },
    { title: "Portfolio construction", description: "Portfolio construction, on the other hand, involves the strategic allocation of assets to achieve a balanced and diversified portfolio that aligns with our investors risk tolerance and financial goals." },
    {
        title: "Dynamic Asset Allocation",
        description: "Our dynamic asset allocation approach adapts seamlessly to evolving market conditions by strategically reallocating investments across diverse asset classes. This proactive method maximizes potential returns while ensuring that portfolio risks remain controlled and balanced, even in volatile markets."
      },
      {
        title: "Global Market Integration",
        description: "We integrate in-depth global market insights to uncover lucrative opportunities across various regions, industries, and economies. By leveraging international expertise and a worldwide perspective, we create diversified strategies that harness cross-border growth potential."
      },
      {
        title: "ESG Innovation",
        description: "Environmental, Social, and Governance (ESG) innovation is at the core of our investment ethos, guiding us to adopt responsible and forward-thinking strategies. We actively support companies that demonstrate leadership in sustainable practices, ethical operations, and social accountability."
      },
      {
        title: "Risk-Adjusted Strategies",
        description: "Our tailored risk-adjusted strategies strike the perfect balance between achieving maximum returns and managing acceptable levels of risk. This calculated approach ensures that portfolios remain stable and perform consistently, even in challenging financial environments."
      },
      {
        title: "AI-Driven Insights",
        description: "Harnessing the power of artificial intelligence, we drive innovation in market research and investment decision-making. By analyzing immense datasets with precision, our AI tools help identify trends, uncover opportunities, and provide actionable insights for strategic growth."
      },
      {
        title: "Private Market Access",
        description: "Our clients gain exclusive access to lucrative private market opportunities, including high-potential investments in venture capital and private equity. These unique avenues enable us to deliver significant growth prospects beyond the limitations of public markets."
      },
      {
        title: "Economic Disruption Mitigation",
        description: "By accounting for potential disruptions from global economic shifts, geopolitical tensions, or sudden market downturns, we help protect investments from unexpected challenges. Our proactive portfolio adjustments ensure resilience and stability through times of uncertainty."
      },
      {
        title: "Sector-Specific Expertise",
        description: "Our investment team brings deep sector-specific expertise, enabling us to identify opportunities in high-growth industries such as technology, healthcare, and renewable energy. This focused analysis ensures that we are well-positioned to capitalize on emerging trends and long-term growth potential."
      },
      {
        title: "Sustainable Infrastructure",
        description: "We strategically invest in sustainable infrastructure projects, including renewable energy, eco-friendly real estate, and green transportation systems. These investments align with global sustainability goals while providing steady returns and fostering a positive environmental impact."
      },
      {
        title: "Volatility Index Strategies",
        description: "By utilizing advanced volatility indices, we actively manage risks during turbulent market periods. This approach ensures that portfolios maintain their stability and continue delivering consistent results, regardless of short-term fluctuations in the market."
      },
      {
        title: "Long-Term Growth Vision",
        description: "We prioritize investments with a robust vision for sustained growth and profitability, ensuring that our strategies align with clients’ long-term objectives. This forward-looking approach fosters value creation over time, even in dynamic market environments."
      },
      {
        title: "AI-Augmented Trading",
        description: "Our state-of-the-art AI-augmented trading systems execute transactions with remarkable speed, precision, and efficiency. By leveraging cutting-edge technology, we capitalize on real-time market opportunities to optimize performance and enhance returns."
      },
      {
        title: "Carbon-Neutral Investments",
        description: "Our focus on carbon-neutral investments demonstrates our commitment to supporting environmentally sustainable initiatives. These eco-conscious strategies reduce environmental impact while offering competitive financial returns and long-term value."
      },
      {
        title: "Smart Beta Strategies",
        description: "Smart beta strategies integrate the best elements of active and passive investment approaches, allowing us to capture market inefficiencies effectively. This hybrid methodology enhances portfolio performance while maintaining cost efficiency and scalability."
      },
      {
        title: "Customized Risk Solutions",
        description: "We design bespoke risk management solutions that are meticulously tailored to meet each client’s unique financial goals and preferences. By addressing specific risk tolerances and objectives, we create personalized portfolios that ensure lasting success."
      },
      {
        title: "Emerging Technology Ventures",
        description: "Investing in emerging technologies enables us to access the forefront of innovation in areas like biotech, fintech, and artificial intelligence. These high-potential sectors provide an opportunity to drive significant growth and stay ahead of market trends."
      },
      {
        title: "Predictive Analytics",
        description: "Our cutting-edge predictive analytics capabilities provide unparalleled insights into future market movements based on extensive data modeling. This foresight empowers us to make well-informed investment decisions that maximize potential gains while mitigating risks."
      },
      {
        title: "Tactical Opportunities",
        description: "We proactively identify and seize tactical opportunities arising from market inefficiencies, temporary dislocations, or unique conditions. These agile and adaptive strategies complement long-term plans by delivering additional value through strategic timing and precision."
      },
      {
        title: "High-Yield Bonds",
        description: "High-yield bonds offer a compelling opportunity for investors seeking robust income streams and above-average returns. We meticulously select these instruments to ensure they align with both growth and risk management objectives within our clients’ portfolios."
      },
      {
        title: "Global Infrastructure Projects",
        description: "Our investments in global infrastructure projects include transportation systems, energy grids, and water resources, essential for economic growth and stability. These projects provide stable returns while addressing critical development needs around the world."
      },
    
        {
          title: "Investment Philosophy",
          description: "Our investment philosophy is built on a foundation of disciplined decision-making, strategic thinking, and a commitment to sustainable growth. We prioritize long-term value creation by focusing on quality assets, robust market analysis, and clear investment objectives."
        },
        {
          title: "Market Analysis",
          description: "Through continuous market analysis, we monitor global economic trends, industry shifts, and market dynamics to identify emerging opportunities and potential risks. This proactive approach allows us to stay ahead of market changes and adjust our strategies accordingly for optimal results."
        },
        {
          title: "Asset Allocation",
          description: "Effective asset allocation is key to optimizing risk-adjusted returns. By carefully selecting and balancing asset classes based on market conditions, economic forecasts, and investor goals, we ensure that each portfolio is tailored to meet specific financial objectives."
        },
        {
          title: "Alternative Investments",
          description: "Alternative investments, such as private equity, real estate, and hedge funds, offer unique opportunities for diversification and higher returns. We integrate these alternatives into our portfolios to provide access to non-traditional asset classes and enhance overall performance potential."
        },
        {
          title: "Global Perspective",
          description: "Our investment approach incorporates a global perspective, considering opportunities across regions and markets worldwide. This broad view enables us to tap into growth potential from emerging markets while managing global economic risks effectively."
        },
        {
          title: "Impact Investing",
          description: "We are committed to impact investing, which combines financial returns with positive social and environmental outcomes. By supporting companies and initiatives that drive change, we aim to create value not only for our investors but also for society at large."
        },
        {
          title: "Behavioral Finance",
          description: "Understanding the psychological factors that influence investment decisions is key to our strategy. By integrating insights from behavioral finance, we anticipate market trends and investor behavior, allowing us to make more informed and rational investment choices."
        },
        {
          title: "Innovation and Technology",
          description: "We embrace cutting-edge technology and innovation to enhance investment strategies. By leveraging data analytics, machine learning, and AI-driven tools, we optimize our investment processes and stay ahead in a rapidly evolving market environment."
        },
        {
          title: "Economic Forecasting",
          description: "Our economic forecasting capabilities allow us to anticipate future market conditions based on macroeconomic indicators, geopolitical trends, and market cycles. This insight drives our investment decisions, ensuring that we are well-positioned to navigate changing economic landscapes."
        },
        {
          title: "Capital Preservation",
          description: "We prioritize capital preservation by identifying low-risk opportunities that maintain or grow value in both stable and turbulent markets. This focus helps safeguard investor assets while still pursuing attractive growth prospects."
        },
        {
          title: "Liquidity Management",
          description: "Maintaining liquidity is essential to our investment strategy, enabling us to respond quickly to market changes and seize new opportunities. We balance liquidity needs with long-term growth potential to ensure flexibility without compromising performance."
        },
        {
          title: "Active Management",
          description: "Our active management approach is designed to take advantage of market inefficiencies. By continuously analyzing investment opportunities and adjusting strategies, we seek to outperform passive strategies and provide superior returns to our clients."
        },
        {
          title: "Private Equity",
          description: "Private equity investments allow us to tap into high-growth potential and unique value opportunities. Our experience in managing private equity portfolios enables us to generate significant returns through long-term capital investments in private companies."
        },
        {
          title: "Structured Products",
          description: "We specialize in creating structured products that cater to specific investor needs, offering customized risk-return profiles. These tailored solutions provide targeted exposure to various asset classes while controlling risk and enhancing potential returns."
        },
        {
          title: "Environmental, Social, and Governance (ESG)",
          description: "We integrate ESG factors into our investment process to promote sustainability, ethical practices, and positive societal impact. Our commitment to responsible investing aligns financial goals with the values of our clients and the broader community."
        },
        {
          title: "Alpha Generation",
          description: "Our goal is to consistently generate alpha, or excess returns, by identifying market inefficiencies and exploiting them through sophisticated strategies. This approach enables us to outperform traditional benchmarks and deliver enhanced value to our investors."
        },
        {
          title: "Financial Engineering",
          description: "Financial engineering involves the application of quantitative techniques to design innovative investment products and strategies. By leveraging advanced mathematical models and financial instruments, we create tailored solutions that maximize returns and minimize risks."
        },
        {
          title: "Tax Efficiency",
          description: "Our tax-efficient investment strategies focus on maximizing after-tax returns by minimizing tax liabilities through careful planning and asset allocation. This approach ensures that investors retain more of their returns, enhancing long-term wealth creation."
        },
        {
          title: "Financial Planning",
          description: "We offer comprehensive financial planning services to help clients achieve their long-term financial goals. Through personalized strategies, we ensure that investments align with specific objectives, whether retirement, education, or wealth preservation."
        },
        {
          title: "Global Asset Class Strategy",
          description: "We take a global view of asset allocation, strategically investing across multiple asset classes, including equities, bonds, commodities, and currencies. This diverse approach allows us to access opportunities and balance risk on a global scale."
        }
      
    ];
      

// Fisher-Yates Shuffle
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// Main Component
const SixCardsRandom = () => {
    // Memoize the random selection to ensure it doesn't change unnecessarily
    const randomItems = useMemo(() => {
        const shuffled = shuffleArray(allItems);
        return shuffled.slice(0, 12); // Select 12 unique items
    }, []);

    // Divide into two groups of 6
    const sixCardsContent = randomItems.slice(0, 6);
    const gridContainerContent = randomItems.slice(6, 12);

    return (
       
        <section id="location">
             <div className="cards">
                {sixCardsContent.map((card, index) => (
                    <div key={index} className="card">
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </section>  

    );
};

export default SixCardsRandom;
