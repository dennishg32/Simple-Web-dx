document.addEventListener("DOMContentLoaded", function() {
	const modals = document.querySelectorAll(".modal");
	const overlay = document.querySelector(".overlay");
  
	function closeModal() {
	  modals.forEach(modal => modal.classList.add("hidden"));
	  overlay.classList.add("hidden");
	}
  
	function openModal(modalId) {
	  const modal = document.getElementById(modalId);
	  modal.classList.remove("hidden");
	  overlay.classList.remove("hidden");
	}
  
	const openModalBtns = document.querySelectorAll(".btn-open");
	openModalBtns.forEach((btn, index) => {
	  btn.addEventListener("click", function() {
		if(index === 0) {
		  openModal("modal1");
		} else if(index === 1) {
		  openModal("modal2");
		} else if(index === 2) {
		  openModal("modal3");
		}
	  });
	});
  
	const closeButtons = document.querySelectorAll(".close-button");
	closeButtons.forEach(button => {
	  button.addEventListener("click", function() {
		const modal = this.closest(".modal");
		closeModal(modal);
	  });
	});
  
	overlay.addEventListener("click", closeModal);
  
	document.addEventListener("keydown", function (e) {
	  if (e.key === "Escape") {
		closeModal();
	  }
	});
  });
  