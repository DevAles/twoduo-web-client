export async function getStaticProps() {
    let props = {};
    const response = await fetch("https://twoduo-development.up.railway.app/");
    const twoduo = await response.json();

    props.tasks = twoduo.tasks;

    return {
        props
    }
}

function renderHtml(tasks) {
    const html = {
        title: <h1>twoduo-web-client</h1>,
        elements: []
    }

    for (let i = 0; i < tasks.length; i++) {
        html.elements[i] = <div key={i}>Task {i + 1}: {tasks[i]}</div>
    }

    return html;
}

function Home(props) {
    const html = renderHtml(props.tasks);

    return (
        <main>
            {html.title}
            {html.elements}
        </main>
    )
}

export default Home;
