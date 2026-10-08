let developCount = 0;
let isStopped = false;

let photo = document.getElementById("photo");
let message = document.getElementById("message");
let developButton = document.getElementById("develop-button");
let stopButton = document.getElementById("stop-button");

function developPhoto() {
  // Once stopped, the photograph cannot develop further.
  if (isStopped) {
    return;
  }

  developCount++;

  if (developCount < 3) {
    // Underdeveloped: the image gradually appears.
    photo.style.opacity = developCount * 0.3;
    photo.style.filter = "brightness(1)";
  } else if (developCount <= 5) {
    // Correctly developed: the photograph is clear.
    photo.style.opacity = 1;
    photo.style.filter = "brightness(1)";
  } else {
    // Overdeveloped: each click makes the photograph darker.
    photo.style.opacity = 1;

    let brightness = Math.max(0, 1 - (developCount - 5) * 0.25);
    photo.style.filter = "brightness(" + brightness + ")";
  }
}

function stopPhoto() {
  if (isStopped) {
    return;
  }

  isStopped = true;
  developButton.disabled = true;
  stopButton.disabled = true;

  // The result depends on the user's previous clicks.
  if (developCount < 3) {
    message.textContent = "Too Soon — The image is still incomplete.";
  } else if (developCount <= 5) {
    message.textContent = "Just Right — You caught it at the right moment.";
  } else {
    message.textContent =
      "Too Long — The details have disappeared into the dark.";
  }
}

function resetPhoto() {
  developCount = 0;
  isStopped = false;

  photo.style.opacity = 0;
  photo.style.filter = "brightness(1)";
  message.textContent = "";

  developButton.disabled = false;
  stopButton.disabled = false;
}
