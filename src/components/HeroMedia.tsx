import { useEffect, useRef, useState } from 'react';

type Props = { fileName: string };
export function HeroMedia({ fileName }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion) { video.pause(); return; }
    video.play().catch(() => setPlaying(false));
  }, [reducedMotion, canPlay]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => setPlaying(false));
    else video.pause();
  };

  return <>
    <div className="hero-atmosphere" aria-hidden="true" />
    {!reducedMotion && <video
      ref={videoRef}
      className="hero-video"
      autoPlay muted loop playsInline
      poster="/images/surf-poster.jpg"
      onCanPlay={() => setCanPlay(true)}
      onPlaying={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
      aria-hidden="true"
    >
      <source src={`/videos/${fileName}`} type="video/mp4" />
    </video>}
    {canPlay && !reducedMotion && <button type="button" className="video-toggle" onClick={togglePlayback} aria-label={playing ? 'Pause background video' : 'Play background video'}>{playing ? 'Ⅱ Pause film' : '▶ Play film'}</button>}
  </>;
}
