"use client";
import styles from './teachers-grid.module.css';
import { teachers } from '../../data';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { Linkedin } from 'lucide-react';

interface Props { id: string }

function TeacherCard({ id }: Props) {
  const member = teachers.find(t => t.id === id)!;
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once:true, amount:0.4 });
  const supportsViewTimeline = CSS.supports('animation-timeline: view()');
  const [loaded, setLoaded] = useState(false);
  const onLoad = useCallback(()=> setLoaded(true), []);

  return (
    <div ref={ref} className={`${styles.layer} card-animation-layer`}>
      <motion.article
        className={styles.card}
        initial={!supportsViewTimeline ? { y:30, scale:.96 } : undefined}
        animate={!supportsViewTimeline && inView ? { y:0, scale:1 } : undefined}
        transition={{ duration:.75, ease:[0.23,0.68,0.32,0.97] }}
      >
        <div className={styles.image}>
          {!loaded && <div className="card-skeleton absolute inset-0" />}
          <img src={member.image} alt={member.name} loading="lazy" onLoad={onLoad} className={`${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} />
        </div>
        <div className={styles.header}>
          <div className={styles.role}>{member.role}</div>
          <h3 className={styles.name}>{member.name}</h3>
        </div>
        <p className={styles.bio}>{member.bio}</p>
        <div className={styles.tags}>
          {member.expertise?.slice(0,3).map(tag => <span key={tag} className={styles.badge}>{tag}</span>)}
          {member.location && <span className={`${styles.badge} ${styles.alt}`}>{member.location}</span>}
        </div>
        {member.links && (
          <div className={styles.links}>
            {member.links.map(l => (
              <a key={l.label} href={l.url} className={styles.link} target="_blank" rel="noopener noreferrer">
                <Linkedin size={12} /> {l.label}
              </a>
            ))}
          </div>
        )}
      </motion.article>
    </div>
  );
}

export function TeachersGrid(){
  return <div className={styles.root}>{teachers.map(m => <TeacherCard key={m.id} id={m.id} />)}</div>;
}
