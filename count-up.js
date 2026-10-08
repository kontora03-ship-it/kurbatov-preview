/* Counters removed. Restore plain numbers on cached page markup. */
document.querySelectorAll('[data-count-to]').forEach(el=>{el.textContent=el.dataset.countFinal||el.dataset.countTo;el.removeAttribute('data-count-to');el.removeAttribute('aria-label');});
