import styles from '../styles.module.css';

export async function getStaticProps() {
    let props = {};
    // const response = await fetch("http://127.0.0.1:8000/", {
    //     method: 'GET',
    //     headers: {
    //         'key': 'senhaforte'
    //     }
    // });
    // const twoduo = await response.json();
    //

    const twoduo = {
        tasks: ["two", "duo"]
    }

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
        html.elements[i] = <div key={i} className={styles.task}>Task {i + 1}: {tasks[i]}</div>
    }

    return html;
}

function Home(props) {
    const html = renderHtml(props.tasks);

    return (
        <main id={styles.mainArea}>
            <div id={styles.titleArea}>{html.title}</div>
            <div id={styles.taskArea}>
                <div id={styles.taskBorder}>
                    <div>{html.elements}</div>
                    <div>{html.elements}</div>
                    <div>{html.elements}</div>
                    <div>{html.elements}</div>
                    <div>{html.elements}</div>
                    <div>{html.elements}</div>
                </div>
            </div>
        </main>
    )
}

export default Home;
