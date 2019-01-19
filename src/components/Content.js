import React, {Component} from "react"; 
import "./Content.scss";

export class Content extends Component {

    returnContent(content){
        let container, header, body, src, html, list;
        const formatedPost = content.map((section, key) => {
            let content = [];
            if (((header = section.HEADER) !== null) && 
                ((body = section.BODY) !== null)) {
                container = (<>
                    <h2 className = "subheading">{header}</h2>
                    <p className = "mainParagraph">{body}</p>
                </>);
                content.push(<div key = {`${key}A`}>
                    {container}
                </div>);
            } else if ((body = section.HEADER) !== null) {
                container = <h2 className = "subheading">{header}</h2>;
                content.push(<div key = {`${key}B`}>
                    {container}
                </div>);
            } else if ((body = section.BODY) !== null) {
                container = <p className = "mainParagraph">{body}</p>;
                content.push(<div key = {`${key}C`}>
                    {container}
                </div>);
            }
    
            if ((src = section.SRC) !== null) {
                container = (<img src = {src} alt = "pretty-banner">{header}</img>);
                content.push(<div key = {`${key}D`}>
                    {container}
                </div>);
            }

            if ((html = section.HTML) !== null) {
                let offset = 0;
                const formattedTable = html.map((row, rKey) => {
                    let header, body, colspan, rowspan;
                    const formattedRows= row.CONTENT.map((column, cKey) => {
                        let formattedColumn;
                        colspan = (column.colspan !== null)? column.colspan : 1;
                        rowspan = (column.rowspan !== null)? column.rowspan : 1;
                        if ((header = column.HEADER) !== null) {
                            offset = (rowspan > offset) ? (rowspan - 1) : offset;
                            formattedColumn = <th colSpan = {colspan} rowSpan = {rowspan} key = {cKey}><h2 className = "tHeader">{header}</h2></th>;
                        } else if ((body = column.BODY) !== null) {
                            formattedColumn = <td colSpan = {colspan} rowSpan = {rowspan} key = {cKey}><p className = "tParagraph">{body}</p></td>;
                        }
                        return formattedColumn;
                    });
                    
                    return <tr key = {rKey}>{formattedRows}</tr>;
                });

                const startTable = [<thead key = {1}>{formattedTable.slice(0, offset+1)}</thead>];
                const endTable = [<tbody key = {2}>{formattedTable.slice(offset+1)}</tbody>];
                container = <table>{startTable.concat(endTable)}</table>;
                content.push(<div className = "table" key = {`${key}E`}>
                    {container}
                </div>);
            }

            if ((list = section.LIST) !== null) {
                const formattedList = list.map((item, lKey) => (
                    <li key = {lKey}><p className = "lParagraph"><b>{(item.HEADER + " ")}</b>{item.BODY}</p></li>));

                container = <ul>{formattedList}</ul>;

                content.push(<div className = "list" key = {`${key}F`}>
                    {container}
                </div>);
            }

            return content;
    });

    return <div className = "content">{formatedPost}</div>;

    }

    render() {

        return this.returnContent(this.props.content);
    }
    
}