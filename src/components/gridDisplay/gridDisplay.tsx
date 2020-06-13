import React from 'react';
import styles from './styles.module.scss';
import { compact } from 'lodash'; 

export default function GridDisplay(props: {
    grid: Array<{ label: string, line: number, column: number, gridArea: string, background: string }>, columns: string
}) {
    let templateArea: any = [''];
    let line = 1;

    const catchErrors = () => {
        let line = 1;
        let countByLine = 0;
        const result =  props.grid.map((element: any) => {
            let error = false;
            if(element.line === line){
                countByLine += element.column;
                if(countByLine > Number(props.columns)){
                    error = true;
                    return error; 
                }  
            }else {
                line = element.line;
                countByLine = 0;
                countByLine += element.column;
                if(countByLine > Number(props.columns)){
                    error = true;
                    return error; 
                } 
            }     
        });
        const isOnError = compact(result).length ? true : false;
        return isOnError;
    }

    const buildEmptyColumns = (elements: number) => {
        let result = '';
        for (let i = 0; i <= elements; i++) {
            result += '. ';
        }
        return result;
    }

    const buildElementGridTemplateWithColumns = (element: string, columns: number) => {
        let result = '';
        for(let i = 0; i < columns; i++) {
            result += ` ${element}`;
        }
        return result;
    }

    props.grid.map((element, index: number) => {
        if (element.line === line) {
            const idx = line - 1;
            if (index === 0) {
                // pour le premier element
                templateArea[idx] = templateArea[idx] + `"${buildElementGridTemplateWithColumns(element.gridArea, element.column)}`;
            } else {
                const nextidx = index + 1;
                const nextLine = line + 1;

                if (props.grid[nextidx]) {
                    const splitedElements = templateArea[idx].split(' ').filter((element: string) => element.length)
                    const numberOfelements = splitedElements.length + element.column;
                    const emptyColumns = buildEmptyColumns(Number(props.columns) - numberOfelements)
                    // on check si c'est une nouvelle ligne alors fermeture
                    if (props.grid[nextidx].line === nextLine) {
                        templateArea[idx] = templateArea[idx] + ` ${buildElementGridTemplateWithColumns(element.gridArea, element.column)} ${emptyColumns}"`;
                    } else {
                        templateArea[idx] = templateArea[idx] + ` ${buildElementGridTemplateWithColumns(element.gridArea, element.column)}`;
                    }
                } else {
                    const splitedElements = templateArea[idx].split(' ').filter((element: string) => element.length)
                    const numberOfelements = splitedElements.length + element.column;
                    const emptyColumns = buildEmptyColumns(Number(props.columns) - numberOfelements);
                    // on est dans le dernier bloc
                    if (props.grid.length - 1 === index) {
                        templateArea[idx] = templateArea[idx] + ` ${buildElementGridTemplateWithColumns(element.gridArea, element.column)} ${emptyColumns}"`;
                    }
                }
            }
        } else {
            line = element.line;
            const idx = line - 1;
            templateArea[idx] = `"${buildElementGridTemplateWithColumns(element.gridArea, element.column)}`;
        }
    });

    const template = templateArea.join(' ');
    console.log(template);

    return !catchErrors() ? 
        <div className={styles.gridContainer} style={{ gridTemplateAreas: `${template}` }}>
            {
                props.grid.map(element => {
                    return <div style={{ gridArea: element.gridArea }} key={element.label}>
                        <div className={`${styles.container} ${styles.flex}`} style={{ background: element.background }}>
                            {element.label}
                        </div>
                    </div>
                })
            }
        </div> : <div className={styles.flex}>
            <h1 className={styles.error}>Il y a des erreurs dans vos données</h1>
            <p className={styles.error}>Veuillez verifier le nombre de colonnes (doit être inférieur ou égal à 6)</p>
        </div>
}