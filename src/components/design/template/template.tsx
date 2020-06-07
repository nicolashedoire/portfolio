import React from 'react';
import styles from './styles.module.scss';

export default function Template() {

    const sidebarMenuItems = Array.from(Array(6).keys())

    const renderSidebarMenu = (itemPosition: number) => {
        return itemPosition === 3 ?
            <div className={styles.sidebarMenuItemSelected}>
                <div className={`${styles.circleMediumRed}`} />
                <div className={`${styles.textTemplate} ${styles.darkTextTemplate}`} />
            </div> :
            <div className={styles.sidebarMenuItem}>
                <div className={`${styles.circleMedium}`} />
                <div className={`${styles.textTemplate} ${styles.lightTextTemplate}`} />
            </div>
    }

    const renderShape = (options: { type: string, size: string, items: number }) => {
        const shapes = Array.from(Array(options.items).keys())
        return shapes.map(shape => <div key={shape} className={`${styles[options.type + options.size]}`}></div>)
    }

    const renderSection = (style: any, options?: any) => {
        return (
            <div className={styles.section} style={style}>
                <div className={styles.sectionHeader}>
                    <div className={`${styles.textTemplate} ${styles.darkTextTemplate}`} />
                </div>
                <div className={`${styles[`sectionContent${options.sectionContent}`]}`}>
                    {options ? renderShape(options) : null}
                </div>
            </div>
        )
    }

    return (
        <div className={styles.templateContainer}>
            <div className={styles.header}>
                <div className={styles.bullet}></div>
                <div className={styles.bullet}></div>
                <div className={styles.bullet}></div>
            </div>
            <div className={styles.body}>
                <div className={styles.sidebar}>
                    <div className={styles.brand}>
                        <div className={styles.logo}></div>
                        <div className={styles.brandText}>Brand</div>
                    </div>
                    <div className={styles.sidebarMenu}>
                        {
                            sidebarMenuItems.map((item: number) => renderSidebarMenu(item))
                        }
                    </div>
                </div>
                <div className={styles.page}>
                    <div className={styles.topBar}>
                        <div className={`${styles.textTemplate} ${styles.lightTextTemplate}`} />
                        <div className={`${styles.circleBig}`} />
                        <div className={styles.menu}>
                            <div className={styles.menuBullet}></div>
                            <div className={styles.menuBullet}></div>
                            <div className={styles.menuBullet}></div>
                        </div>
                    </div>
                    <div className={styles.breadcrumb}>
                        <p className={styles.breadcrumbText}>Dashboard</p>
                    </div>
                    <div className={styles.pageContent}>
                        {renderSection({
                            height: '100px',
                            marginBottom: '25px',
                            justifyContent: 'left',
                            alignItems: 'flex-start'
                        }, {
                            type: 'cube',
                            size: 'big',
                            items: 6,
                            sectionContent: 'left'
                        })}

                        <div className={styles.sectionItems}>
                            {renderSection({
                                width: '40%',
                                height: '100px',
                                marginLeft: '15px',
                                marginBottom: '25px'
                            }, {
                                type: 'cube',
                                size: 'medium',
                                items: 3,
                                sectionContent: 'center'
                            })}
                            {renderSection({
                                width: '40%',
                                height: '100px',
                                marginLeft: '15px',
                                marginBottom: '25px'
                            }, {
                                type: 'cube',
                                size: 'medium',
                                items: 3,
                                sectionContent: 'center'
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}