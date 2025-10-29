import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react'
import '../styles/Gallery.css'

const VISIBLE = 3

const WORK_COUNT = 122
const REST_COUNT = 55

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
const EXT_ORDER = ['jpg', 'jpeg'] 
const PAD_ORDER = [0, 2, 3] 

const GalleryStrip = ({ folder, count, title, onSelect }) => {
  const containerRef = useRef(null)
  const jumpingRef = useRef(false)
  const [itemW, setItemW] = useState(0)

 
  const items = useMemo(() => Array.from({ length: count }, (_, i) => i + 1), [count])


  const head = items.slice(0, VISIBLE)
  const tail = items.slice(-VISIBLE)
  const looped = useMemo(() => [...tail, ...items, ...head], [items, tail, head])

 
  const buildCandidate = useCallback((n, k) => {
    const pad = PAD_ORDER[Math.floor(k / EXT_ORDER.length)]
    const ext = EXT_ORDER[k % EXT_ORDER.length]
    const num = pad ? String(n).padStart(pad, '0') : String(n)
    return `${BASE}/${folder}/${num}.${ext}`
  }, [folder])

 
  const onImgError = useCallback((e) => {
    const img = e.currentTarget
    const n = Number(img.dataset.n)
    let k = Number(img.dataset.errIdx || 0) + 1
    const maxK = PAD_ORDER.length * EXT_ORDER.length - 1
    if (k <= maxK) {
      img.src = buildCandidate(n, k)
      img.dataset.errIdx = String(k)
    } else {
      img.style.display = 'none'
    }
  }, [buildCandidate])

 
  const measure = useCallback(() => {
    const cont = containerRef.current
    if (!cont) return
    const w = cont.clientWidth
    if (!w) return
    const next = w / VISIBLE
    setItemW(next)
  }, [])

  const jumpTo = useCallback((left) => {
    const cont = containerRef.current
    if (!cont) return
    jumpingRef.current = true
    cont.scrollTo({ left, behavior: 'instant' })
    requestAnimationFrame(() => { jumpingRef.current = false })
  }, [])

  const centerToRealStart = useCallback(() => {
    if (!itemW) return
    jumpTo(itemW * VISIBLE)
  }, [itemW, jumpTo])

  useEffect(() => {
    measure()
    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [measure])

  useEffect(() => { 
    centerToRealStart() 
  }, [itemW, centerToRealStart])

  useEffect(() => {
    const cont = containerRef.current
    if (!cont || !itemW) return

    const totalReal = items.length * itemW
    const leftEdge = itemW * (VISIBLE - 0.5)
    const rightEdge = itemW * (VISIBLE + items.length - 0.5)

    const onScroll = () => {
      if (jumpingRef.current) return
      const x = cont.scrollLeft
      if (x <= leftEdge) {
        jumpTo(x + totalReal)
      } else if (x >= rightEdge) {
        jumpTo(x - totalReal)
      }
    }

    cont.addEventListener('scroll', onScroll, { passive: true })
    return () => cont.removeEventListener('scroll', onScroll)
  }, [itemW, items.length, jumpTo])

  const scrollByDir = useCallback((dir) => {
    const el = containerRef.current
    if (!el || !itemW) return
    el.scrollBy({ left: dir === 'left' ? -itemW : itemW, behavior: 'smooth' })
  }, [itemW])

  return (
    <div className="gallery-block">
      <h3 className="titleGallerySub">{title}</h3>

      <div className="gallery-wrapper">
        <button
          className="scroll-btn left"
          onClick={() => scrollByDir('left')}
          aria-label={`Попереднє фото ${title}`}
        >
          ←
        </button>

        <div className="gallery-container" ref={containerRef}>
          {looped.map((n, idx) => (
            <div
              key={`${folder}-${idx}-${n}`}
              className="gallery-item"
              style={{ width: itemW ? `${itemW}px` : undefined }}
            >
              <img
                src={buildCandidate(n, 0)}
                data-n={n}
                data-err-idx="0"
                alt={`${title} ${n}`}
                onClick={(e) => onSelect(e.currentTarget.src)}
                onError={onImgError}
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </div>
          ))}
        </div>

        <button
          className="scroll-btn right"
          onClick={() => scrollByDir('right')}
          aria-label={`Наступне фото ${title}`}
        >
          →
        </button>
      </div>
    </div>
  )
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const openModal = (url) => setSelectedImage(url)
  const closeModal = () => setSelectedImage(null)

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedImage])

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="titleGallery">Галерея</h2>

        <GalleryStrip
          folder="gallery/work"
          count={WORK_COUNT}
          title="Ми працюємо"
          onSelect={openModal}
        />

        <GalleryStrip
          folder="gallery/rest"
          count={REST_COUNT}
          title="Ми відпочиваємо"
          onSelect={openModal}
        />
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Закрити">
              ×
            </button>
            <img src={selectedImage} alt="Велике фото" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery