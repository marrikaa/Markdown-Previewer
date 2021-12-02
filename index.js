
marked.setOptions({
    breaks: true,
  });

const renderer = new marked.Renderer();

function App(){
    const[text,setText]=React.useState("# Markdown Text goes here\n## You can also make subheadings\n\nOne of the **trickiest** parts of getting this project to work was learning how to use `dangerouslySetInnerHTML` to make the previewer display the output of [marked.js](https://github.com/markedjs/marked/blob/master/README.md) as HTML instead of a string.\n\nAccording to the React Documentation,\n>dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.\n\nExample Code:\n```\nfunction createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n```\n\nJust remember to:\n- Search, Read, Ask\n- Ask for help on the Forum (that's what worked for me.)\n\n![Vipatron icon](http://vipinjeetsandhu.com/images/BW_Scaryface_icon.jpg 'Vip face1')\n\n![Vipatron icon][picref]\n\n[picref]: http://vipinjeetsandhu.com/images/BW_Scaryface_icon.jpg 'Vip face2'\n");
    return(
        <div className=" text-center px-4">
            <h1 className="p-4">Markdown Previewer</h1>
            <textarea 
                id="editor"
                name="text"
                rows="8"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                className="textarea"
                ></textarea>
            <h1 className="mt-3">Output</h1>
            <Preview markdown={text} />
        </div>

    );
}

function Preview({markdown}){
    return(
        <div  dangerouslySetInnerHTML={{
            __html: marked(markdown,{renderer: renderer })
            }}
            id="preview"
        ></div>
    );
}

ReactDOM.render(<App/>,document.getElementById("root"))