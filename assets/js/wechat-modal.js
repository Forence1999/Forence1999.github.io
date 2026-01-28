// ══════════════════════════════════════════════════════════════════════════════
// WeChat QR Code Modal Handler
// ══════════════════════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWeChatModal);
  } else {
    initWeChatModal();
  }

  function initWeChatModal() {
    // Create modal HTML
    const modalHTML = `
      <div id="wechat-modal" class="wechat-modal">
        <div class="wechat-modal-content">
          <button class="wechat-modal-close" aria-label="Close">&times;</button>
          <img src="/images/wechat.jpg" alt="WeChat QR Code" />
        </div>
      </div>
    `;

    // Insert modal into body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Get modal elements
    const modal = document.getElementById('wechat-modal');
    const closeBtn = modal.querySelector('.wechat-modal-close');

    // Find WeChat link and add click handler
    const wechatLinks = document.querySelectorAll('a[href="#wechat-qr"]');
    wechatLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      });
    });

    // Close modal on close button click
    closeBtn.addEventListener('click', closeModal);

    // Close modal on overlay click
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    }
  }
})();
